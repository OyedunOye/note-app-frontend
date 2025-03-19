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
  const[isASingleNoteClicked, setIsASingleNoteClicked] = useState(false)

  //why can't I set userNote to data? This is an array of notes returned from the db following calling
  //service getUserNotes(). This was properly logged in the console, but somehow there is issue setting
  //it as the userNotes array here.

  //for async functions, the result will be a promise that will either be rejected or fulfilled.
  //2 solutions: either we use then to chain what happens to the fulfilled promise or we use another function
  //that we will now call as async function inside the useEffect().

  useEffect(() => {
    getUserNotes().then(notes=>setUserNotes(notes))

  }, [token])


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

  useEffect(()=>{
    if(isASingleNoteClicked) {
      handleGetANoteId()
    }
  }, [noteId])
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

  const handleEditANote = async(e)=>{
    e.preventDefault();
    const credentials = {
      title,
      content
    }
    if (title!=="" && content !== ""){
      try {
        // console.log(credentials)
        // console.log(noteId)
        const data = await editAnExistingNote(noteId, credentials)
        console.log(data)
        toast(data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
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
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
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
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setToggleDeleteModal(false)
      await getUserNotes().then(notes=>setUserNotes(notes))
    } catch (error) {
      console.log(error)
    }
  }


  //why is noteId void here? The implementation is very similar to delete and update note, the only difference is that they
  //are trigerred by buttons and this is a redirection to page wrapped around h1 and p tags. Could this be the problem?
  //How to correct this?
  const handleGetANoteId = async()=>{
    try {
      console.log(noteId)
      const data = await getSingleUserNote(noteId)
      console.log(data)
      window.localStorage.setItem("id", data.note[0]._id)
      setIsASingleNoteClicked(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=> {
    handleGetANoteId()

  }, [noteId])


  //I faced a lagging problem with selected note card. The problem is that the current noteId is returned but the title and content for previously selected noteIds are selected in the UI. Still trying to solve this issue.

  //The two useEffects above checking conditions to be fulfilled to setSelectedNote for both modals solve the problem! Keeping my comments above to remind me of the difficulty I faced before getting this right 🙂

  return (

    <>

    {noteId && isModalOpen && toggleEditModal && <EditModal closeModal={()=>setIsModalOpen(false)} noteTitle={title} noteContent={content} setNoteTitle={(e)=>setTitle(e.target.value)} setNoteContent={(e)=>setContent(e.target.value)} noteId={noteId} handleEditANote={handleEditANote} />}

    {noteId && isModalOpen && toggleDeleteModal && <DeleteModal closeModal={()=>setIsModalOpen(false)} noteTitle={title} noteContent={content} handleDeleteANote={handleDeleteANote} />}

    {userNotes ? (

    <div className="flex mx-auto content-center justify-center overflow-hidden flex-wrap">
      {userNotes.map((userNote) => (
        <NoteCard key={userNote._id} id={userNote._id} title={userNote.title} content={userNote.content} isEditBtnClicked={()=>setIsModalOpen(true)} setNoteId={()=>setNoteId(userNote._id)} isDeleteBtnClicked={()=>setIsModalOpen(true)} setSelectedNote={setSelectedNote} isDeleteModalClicked={handleDeleteModal} isEditModalClicked={handleEditModal} handleGetANoteId={()=>handleGetANoteId()} setIsASingleNoteClicked={()=>{setIsASingleNoteClicked(true)}}/>

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