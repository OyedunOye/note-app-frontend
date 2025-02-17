import { MdOutlineClose } from "react-icons/md";
import NoteCard from "./NoteCard"
import { useState } from "react";

const NotesContainer = () => {

  const userNotes = [
      {
        title: "This is note 1",
        content:"Random content."
      },
      {
        title: "Note 2",
        content: "Get ready to see some gibberish, you know what I mean."
      },
      {
        title: "Note 3",
        content: "Testing 1 23 45. just some random text hihhloyghlp ojoahklao"
      },
      {
        title: "Note 4",
        content: "Probably the last on the list. Well last but not the least"
      }
  ]

  const [expandedNote, setExpandedNote] = useState(false);


  return (
    <div className="flex mx-auto content-center justify-center overflow-hidden flex-wrap">
      {userNotes.map((userNote, index) => (
        <NoteCard key={index} title={userNote.title} content={userNote.content} />

      ))}

    {/* {expandedNote && (
      <div className=""><div className="flex w-2/5 mx-auto my-[15%] rounded-md bg-slate-700 content-center justify-center h-1/2 p-5">
            <div className="flex-col ">
              <div className="flex justify-end absolute right-96 top-48 py-1 bg-transparent">
                <IoIosCloseCircle className="flex w-10 size-6 bg-transparent" size="sm" onClick={()=>{setExpandedNote(false)}} />
              </div>
              <h3 className="font-extrabold text-center text-3xl">Are you sure you want to edit this note?</h3>
              <p className="text-center text-xl my-2">Title: {userNote.title}</p>
              <div className="flex flex-col border-8 border-black">
                <input onChange={(e)=>{setNoteTitle(e.target.value)}} value={userNote.title} type="text" className=" h-1/4 border-8 border-black p-3 "></input>
                <textarea onChange={(e)=>{setNoteContent(e.target.value)}} value={selectedNote.content}className="h-3/4 border-8 border-black p-3"> </textarea>
              </div>
              <div className="flex space-x-4 justify-center my-3">
                <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Cancel</button>
                <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Update</button>

              </div>
            </div>
          </div></div>
            )} */}

    </div>
  )
}

export default NotesContainer