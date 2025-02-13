import { MdOutlineClose } from "react-icons/md";
import NoteCard from "./NoteCard"

const NotesContainer = () => {
  // const [expandedNote, setExpandedNote] = useState(false);

  return (
    <div className="flex mx-auto content-center justify-center">
      <NoteCard />
      {/* {expandedNote && (
        <div>
        <div>
        <MdOutlineClose color='#000' fontSize={27} className='overlay__close' onClick={()=>{setExpanded(false)}} />
          <h1>Are you sure you want to edit this note?</h1>
          <p>Title: {selectedNote.title}</p>
          <div>
            <input type="text">{selectedNote.title}</input>
            <textarea>{selectedNote.content}</textarea>
          </div>
          <div>
            <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Cancel</button>
            <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Update</button>
            
          </div>
        </div>
      </div>
      )} */}
    </div>
  )
}

export default NotesContainer