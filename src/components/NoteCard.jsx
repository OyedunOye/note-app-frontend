import { Link } from 'react-router'
import { LuPencilLine } from "react-icons/lu";
import { IoTrashBinOutline } from "react-icons/io5";

const NoteCard = ({title, content, isEditBtnClicked, isDeleteBtnClicked, setNoteId, setSelectedNote, isEditModalClicked, isDeleteModalClicked, handleGetANoteId, setIsASingleNoteClicked, id }) => {
  //while calling multiple note setters within a component inheriting the state from its parent, this shows how to call multiple of state-setter functions in a action-handler. I mean the functions called onClick of the Edit Note button.

  return (
    <div>
      <div className="flex flex-col w-80 h-72 m-3 p-3 rounded-md shadow-md bg-white divide-y-2 divide-green-300 cursor-pointer">
        <Link to={`/notes/${id}`}>
          <h1 className="font-bold text-lg h-10 py-1 truncate" onClick={()=>{
          setIsASingleNoteClicked()
          handleGetANoteId()
        }}>{title}</h1>
        </Link>
        <div className="h-56 py-1 px-1">
          <Link to={`/notes/${id}`}>
            <p className="h-3/4 text-md mt-1 mb-2 overflow-hidden text-ellipsis" onClick={()=>{
          setIsASingleNoteClicked()
          handleGetANoteId()
          }}>{content}</p>
          </Link>
          <div className="flex gap-5">
            <button type="button" className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' onClick={()=>
            {
              setNoteId()
              isEditBtnClicked()
              setSelectedNote()
              isEditModalClicked()

            }} >Edit Note <LuPencilLine className='flex my-1 mx-2' /> </button>
            <button type="button" className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'onClick={()=>{isDeleteBtnClicked()
              setNoteId()
              isDeleteModalClicked()
              setSelectedNote()

            }} >Delete Note <IoTrashBinOutline className='flex my-1 mx-2' /> </button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default NoteCard