import { LuPencilLine } from "react-icons/lu";
import { IoTrashBinOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const NoteCard = ({title, content}) => {
  // const [toggleNote, setToggleNote] = useState(false);


  const [expandedNote, setExpandedNote] = useState(false);
  const [noteTitle, setNoteTitle] = useState(title)
  const [noteContent, setNoteContent] = useState(content)

  // const handleCloseSingleNote()=>{
  //   return !expandedNote
  // }

  console.log(expandedNote)

  return (
    <div>
    <div className="flex flex-col w-80 h-72 m-3 p-3 rounded-md shadow-md bg-white divide-y-2 divide-green-300 ">
      <h1 className="font-bold text-lg h-1/4 py-1">{title}</h1>
      <div className="h-3/4 py-1 px-1">
        <p className="h-3/4 text-md my-1">{content}</p>
        <div className="flex gap-5">
          <button type="button" className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' onClick={(e)=>{(setExpandedNote(true))}}>Edit Note <LuPencilLine className='flex my-1 mx-2' /> </button>
          <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Delete Note <IoTrashBinOutline className='flex my-1 mx-2' /> </button>
        </div>
      </div>
    </div>

    {expandedNote===true?  (
      <div className="flex border bg-transparent content-center justify-center">
      <div className="flex w-full mx-auto my-auto rounded-md bg-slate-700 content-center justify-center h-full p-5 ">
        <div className="flex-col p-3">
          <div className="flex justify-end bg-transparent">
            <IoIosCloseCircle type="button" className="flex w-10 size-6 bg-transparent" length="sm" onClick={(e)=>{(setExpandedNote(true))}} />
          </div>
          <h3 className="font-extrabold text-center text-3xl">Are you sure you want to edit this note?</h3>
          <p className="text-center text-xl my-2">Title: {title}</p>
          <div className="flex flex-col border-8 border-black">
            <input onChange={(e)=>{setNoteTitle(e.target.value)}} value={noteTitle} type="text" className=" h-1/4 border-8 border-black p-3 "></input>
            <textarea onChange={(e)=>{setNoteContent(e.target.value)}} value={noteContent}className="h-3/4 border-8 border-black p-3"> </textarea>
          </div>
          <div className="flex space-x-4 justify-center my-3">
            <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Cancel</button>
            <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Update</button>

          </div>
        </div>
          </div>
      </div>
      ):(null)}
    </div>

  )
}

export default NoteCard