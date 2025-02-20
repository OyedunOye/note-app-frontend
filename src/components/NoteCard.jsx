import { LuPencilLine } from "react-icons/lu";
import { IoTrashBinOutline } from "react-icons/io5";

const NoteCard = ({title, content, isEditBtnClicked, isDeleteBtnClicked, id, setNoteId, setSelectedNote }) => {

  //while calling multiple note setters within a component inheriting the state from its parent, this shows how to call multiple of state-setter functions in a action-handler. I mean the functions called onClick of the Edit Note button.
  
  return (
    <div>
    <div className="flex flex-col w-80 h-72 m-3 p-3 rounded-md shadow-md bg-white divide-y-2 divide-green-300 ">
      <h1 className="font-bold text-lg h-1/4 py-1">{title}</h1>
      <div className="h-3/4 py-1 px-1">
        <p className="h-3/4 text-md my-1">{content}</p>
        <div className="flex gap-5">
          <button type="button" className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' onClick={()=>{isEditBtnClicked()
            setNoteId(id)
            setSelectedNote()

          }} >Edit Note <LuPencilLine className='flex my-1 mx-2' /> </button>
          <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'onClick={()=>{isDeleteBtnClicked()
            // setNoteId(id)
            // setSelectedNote()

          }} >Delete Note <IoTrashBinOutline className='flex my-1 mx-2' /> </button>
        </div>
      </div>
    </div>

    </div>

  )
}

export default NoteCard