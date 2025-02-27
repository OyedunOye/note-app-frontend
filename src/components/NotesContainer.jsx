import { useEffect, useState } from "react";
import { NoteCard, EditModal, DeleteModal} from "./index"
import { getUserNotes } from "../services/auth.service";


const NotesContainer = () => {

  const [userNotes, setUserNotes] = useState([
    {
      _id: 1,
      title: "This is note 1",
      content:"Random content."
    },
    {
      _id: 2,
      title: "Note 2",
      content: "Get ready to see some gibberish, you know what I mean."
    },
    {
      _id: 3,
      title: "Note 3",
      content: "Testing 1 23 45. just some random text hihhloyghlp ojoahklao"
    },
    {
      _id: 4,
      title: "Note 4",
      content: "Probably the last on the list. Well last but not the least"
    }
  ])

  const token = localStorage.getItem("noteToken");
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [noteId, setNoteId] = useState(null)
  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")


  //why can't I set userNote to data? This is an array of notes returned from the db following calling
  //service getUserNotes(). This was properly logged in the console, but somehow there is issue setting
  //it as the userNotes array here.

  //for async functions, the result will be a promise that will either be rejected or fulfilled.
  //2 solutions: either we use then to chain what happens to the fulfilled promise or we use another function
  //that we will now as async function inside the useEffect().
  useEffect(() => {
    getUserNotes().then(notes=>setUserNotes(notes))

  }, [token])
  // console.log(userNotes)

  // const handleGetUserNotes = () => {
  //   const data = getUserNotes()
  //   if (data.length !==0){
  //     setUserNotes(data)

  //   }
  //   console.log(data)
  // }

  // handleGetUserNotes()



  useEffect(() => {
    if (noteId && isModalOpen && toggleEditModal ) {
      setSelectedNote()
    }
  }, [noteId]);

  useEffect(() => {
    if (noteId && isModalOpen && toggleDeleteModal ) {
      setSelectedNote()
    }
  }, [noteId]);

  // const handleSetUserNotes = (data) => {
  //   setUserNotes(data)
  // }


  // Note how the function below was used in the NoteCard component, just called the name
  //without () nor callback because it is a properly defined function

  //Compare the difference in how the state-setters were called as callback functions in their respective components
  //doing otherwise will not work as desired.


  const setSelectedNote = ()=>{

    const selectedNote = userNotes.filter(userNote => userNote._id === noteId)
    if(selectedNote.length!==0){
      setNoteTitle(selectedNote[0].title)
      setNoteContent(selectedNote[0].content)
    }else{
      setNoteTitle("")
      setNoteContent("")
    }
  }

  const handleDeleteModal = () => {
    setToggleDeleteModal(true)
    setToggleEditModal(false)
  }
  const handleEditModal = () => {
    setToggleDeleteModal(false)
    setToggleEditModal(true)
  }

  //Keeping the below console.logs until the lagging problem with selected note card is fixed
  //The problem is that the current noteId is returned but the noteTitle and noteContent for previously selected noteIds are selected in the UI. Still trying to solve this issue.

  //The two useEffects above solve the problem! Keeping my comments above to remind me of the difficulty I faced before getting this right 🙂

  // console.log(noteId)
  // console.log(noteTitle)
  // console.log(noteContent)

  return (

    <>

    {noteId && isModalOpen && toggleEditModal && <EditModal closeModal={()=>setIsModalOpen(false)} noteTitle={noteTitle} noteContent={noteContent} setNoteTitle={(e)=>setNoteTitle(e.target.value)} setNoteContent={(e)=>setNoteContent(e.target.value)} />}

    {noteId && isModalOpen && toggleDeleteModal && <DeleteModal closeModal={()=>setIsModalOpen(false)} noteTitle={noteTitle} noteContent={noteContent} />}

    <div className="flex mx-auto content-center justify-center overflow-hidden flex-wrap">
      {userNotes.map((userNote) => (
        <NoteCard key={userNote._id} title={userNote.title} content={userNote.content} isEditBtnClicked={()=>setIsModalOpen(true)} setNoteId={()=>setNoteId(userNote._id)} isDeleteBtnClicked={()=>setIsModalOpen(true)} setSelectedNote={setSelectedNote} isDeleteModalClicked={handleDeleteModal} isEditModalClicked={handleEditModal}/>

      ))}

    </div>
    </>
  )
}

export default NotesContainer