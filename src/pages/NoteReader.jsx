import { useState } from "react"
import { IoIosCloseCircle } from "react-icons/io";


const NoteReader = () => {
  const selectedNote = {
      title: "God is good",
      content: "God is good all the time, and all the time, God is good!"
    }

  const title=selectedNote.title
  const content=selectedNote.content
  const [noteTitle, setNoteTitle] = useState({title})
  const [noteContent, setNoteContent] = useState({content})

  // handleEditNote = () =>{

  // }
  return (
    <div className="flex w-2/5 mx-auto my-[15%] rounded-md bg-slate-700 content-center justify-center h-1/2 p-5 ">
      <div className="flex-col ">
        <div className="flex justify-end absolute right-96 top-48 py-1 bg-transparent">
          <IoIosCloseCircle className="flex w-10 size-6 bg-transparent" length="sm" />
        </div>
        <h3 className="font-extrabold text-center text-3xl">Are you sure you want to edit this note?</h3>
        <p className="text-center text-xl my-2">Title: {selectedNote.title}</p>
        <div className="flex flex-col border-8 border-black">
          <input onChange={(e)=>{setNoteTitle(e.target.value)}} value={selectedNote.title} type="text" className=" h-1/4 border-8 border-black p-3 "></input>
          <textarea onChange={(e)=>{setNoteContent(e.target.value)}} value={selectedNote.content}className="h-3/4 border-8 border-black p-3"> </textarea>
        </div>
        <div className="flex space-x-4 justify-center my-3">
          <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Cancel</button>
          <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Update</button>

        </div>
      </div>
    </div>
  )
}

export default NoteReader