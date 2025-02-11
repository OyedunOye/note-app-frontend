import { LuPencilLine } from "react-icons/lu";
import { IoTrashBinOutline } from "react-icons/io5";

const NoteCard = () => {
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
  return (
    <div className="flex w-96 h-80">
      {userNotes.map((userNote, index) => (
        <div className="flex flex-col w-full h-full m-3 p-3 rounded-md shadow-md bg-white divide-y-2 divide-green-300">
          <h1 className="font-bold text-lg h-1/4 py-1">{userNote.title}</h1>
          <div className="h-3/4">
            <p className="h-3/4 text-md my-2">{userNote.content}</p>
            <div className="flex gap-5">
              <button className='bg-green-900 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Edit Note <LuPencilLine className='flex my-1 mx-2' /> </button>
              <button className='bg-red-600 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Delete Note <IoTrashBinOutline className='flex my-1 mx-2' /> </button>
            </div>
          </div>
        </div>

        ))}
    </div>
  )
}

export default NoteCard