import { useEffect, useState } from "react";
import { NoteCard, EditModal, DeleteModal} from "./index"
import { deleteAnExistingNote, editAnExistingNote, getSingleUserNote, getUserNotes } from "../services/auth.service";
import { toast } from "react-toastify";


const NotesContainer = () => {

  const token = localStorage.getItem("noteToken");
  const [userNotes, setUserNotes] = useState([])
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [noteId, setNoteId] = useState(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  // const selectedNote = userNotes.filter(userNote => userNote._id === noteId)


  //why can't I set userNote to data? This is an array of notes returned from the db following calling
  //service getUserNotes(). This was properly logged in the console, but somehow there is issue setting
  //it as the userNotes array here.

  //for async functions, the result will be a promise that will either be rejected or fulfilled.
  //2 solutions: either we use then to chain what happens to the fulfilled promise or we use another function
  //that we will now call as async function inside the useEffect().
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


  // Note how the function below was used in the NoteCard component, just called the name
  //without () nor callback because it is a properly defined function

  //Compare the difference in how the state-setters were called as callback functions in their respective components
  //doing otherwise will not work as desired.


  const setSelectedNote = ()=>{

    const selectedNote = userNotes.filter(userNote => userNote._id === noteId)
    if(selectedNote.length!==0){
      setTitle(selectedNote[0].title)
      setContent(selectedNote[0].content)
    }else{
      setTitle("")
      setContent("")
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

  // const handleGetAUserNote = async () => {
  //   return await getSingleUserNote(noteId)
  // }

  // useEffect(() => {
  //   handleGetAUserNote()

  // }, [token, noteId])

  // console.log(noteId)
  // handleGetAUserNote()

  const handleEditANote = async(e)=>{
    e.preventDefault();
    const credentials = {
      title,
      content
    }
    if (title!=="" && content !== ""){
      try {
        console.log(credentials)
        console.log(noteId)
        const data = await editAnExistingNote(noteId, credentials)
        console.log(data)
        toast(data.message, {
          position: "top-right",
          autoClose: 5000,
          // hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
        setToggleEditModal(false)
        await getUserNotes().then(notes=>setUserNotes(notes))
      } catch (error) {
        console.log(error)
      }
    } else {
      toast("Neither the title nor the content can be empty, delete the note instead!", {
        position: "top-right",
        autoClose: 5000,
        // hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
  }

  const handleDeleteANote = async()=>{
    try {
      console.log(noteId)
      await deleteAnExistingNote(noteId)
      toast("Note deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        // hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
      setToggleDeleteModal(false)
      await getUserNotes().then(notes=>setUserNotes(notes))
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(()=>{
  //   handleEditANote()
  // }, [noteId])

  //Keeping the below console.logs until the lagging problem with selected note card is fixed
  //The problem is that the current noteId is returned but the noteTitle and noteContent for previously selected noteIds are selected in the UI. Still trying to solve this issue.

  //The two useEffects above solve the problem! Keeping my comments above to remind me of the difficulty I faced before getting this right 🙂

  // console.log(noteId)
  // console.log(noteTitle)
  // console.log(noteContent)

  return (

    <>

    {noteId && isModalOpen && toggleEditModal && <EditModal closeModal={()=>setIsModalOpen(false)} noteTitle={title} noteContent={content} setNoteTitle={(e)=>setTitle(e.target.value)} setNoteContent={(e)=>setContent(e.target.value)} noteId={noteId} handleEditANote={handleEditANote} />}

    {noteId && isModalOpen && toggleDeleteModal && <DeleteModal closeModal={()=>setIsModalOpen(false)} noteTitle={title} noteContent={content} handleDeleteANote={handleDeleteANote} />}

    {userNotes ? (

    <div className="flex mx-auto content-center justify-center overflow-hidden flex-wrap">
      {userNotes.map((userNote) => (
        <NoteCard key={userNote._id} title={userNote.title} content={userNote.content} isEditBtnClicked={()=>setIsModalOpen(true)} setNoteId={()=>setNoteId(userNote._id)} isDeleteBtnClicked={()=>setIsModalOpen(true)} setSelectedNote={setSelectedNote} isDeleteModalClicked={handleDeleteModal} isEditModalClicked={handleEditModal}/>

      ))}

    </div>
    ) : (
      <div className="flex text-3xl my-20">
        <h3 className="mx-10 text-center w-full">You do not have any notes, create your first note!</h3>
      </div>
    ) }
    </>
  )
}

export default NotesContainer