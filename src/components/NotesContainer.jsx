import NoteCard from "./NoteCard"
import { useState } from "react";
import EditModal from "./modals/EditModal";
import DeleteModal from "./modals/DeleteModal";


const NotesContainer = () => {

  const userNotes = [
      {
        id: 1,
        title: "This is note 1",
        content:"Random content."
      },
      {
        id: 2,
        title: "Note 2",
        content: "Get ready to see some gibberish, you know what I mean."
      },
      {
        id: 3,
        title: "Note 3",
        content: "Testing 1 23 45. just some random text hihhloyghlp ojoahklao"
      },
      {
        id: 4,
        title: "Note 4",
        content: "Probably the last on the list. Well last but not the least"
      }
  ]

  // const [expandedNote, setExpandedNote] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [noteId, setNoteId] = useState("")
  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")


  // Note how the function below was used in the NoteCard component, just called the name
  //without () nor callback because it is a properly defined function

  //Compare the difference in how the state-setters were called as callback functions in their respective components
  //doing otherwise will not work as desired.

  const setSelectedNote = ()=>{
    const selectedNote = userNotes.filter(userNote => userNote.id === noteId)
    if(selectedNote.length!==0){
      setNoteTitle(selectedNote[0].title)
      setNoteContent(selectedNote[0].content)
    }else{
      setNoteTitle("")
      setNoteContent("")
    }
  }

  //Keeping the below console.logs until the lagging problem with selected note card is fixed
  //The problem is that the current noteId is returned but the noteTitle and noteContent for previously selected noteIds are selected in the UI. Still trying to solve this issue.
  console.log(noteId)
  console.log(noteTitle)
  console.log(noteContent)

  return (

    <>

    {isModalOpen && <EditModal closeModal={()=>setIsModalOpen(false)} noteTitle={noteTitle} noteContent={noteContent} setNoteTitle={(e)=>setNoteTitle(e.target.value)} setNoteContent={(e)=>setNoteContent(e.target.value)} resetNoteId={()=>setNoteId("")} />}
    {isModalOpen && <DeleteModal closeModal={()=>setIsModalOpen(false)} noteTitle={noteTitle} noteContent={noteContent} />}

    <div className="flex mx-auto content-center justify-center overflow-hidden flex-wrap">
      {userNotes.map((userNote) => (
        <NoteCard key={userNote.id} title={userNote.title} content={userNote.content} isEditBtnClicked={()=>setIsModalOpen(true)} setNoteId={()=>setNoteId(userNote.id)} isDeleteBtnClicked={()=>setIsModalOpen(true)} setSelectedNote={setSelectedNote}/>

      ))}

    </div>
    </>
  )
}

export default NotesContainer