import { BiLoaderCircle } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";

const EditModal = ({ noteContent, noteTitle, closeModal, handleEditANote, setNoteContent, setNoteTitle, isLoading={isLoading} }) => {

  return (

    <div className='fixed top-0 left-0 bg-black/80 w-full h-full z-[999]'>
        <div className='h-full w-full flex items-center justify-center'>
            {isLoading? (
                <div className="flex items-center justify-center">
                    <BiLoaderCircle className="h-8 w-8 text-white animate-spin" />
                </div>
            ): (
            <div className=" h-[600px] w-[500px] mt-12 relative">
                <div className="flex w-full rounded-md bg-gradient p-5 ">
                    <div className="flex-col p-3">
                        <button onClick={closeModal} className="flex justify-end bg-transparent absolute -right-2 top-0">
                            <IoIosCloseCircle type="button" className="flex w-10 size-6 bg-transparent" length="sm" />
                        </button>
                        <h3 className="font-extrabold text-center text-3xl">Are you sure you want to edit this note?</h3>
                        <p className="text-center text-xl my-2">Title: {noteTitle}</p>
                        <div className="flex flex-col border-8 border-black">
                            <input onChange={(e)=>setNoteTitle(e)} value={noteTitle}  className=" h-1/4 border-8 border-black p-3 "></input>
                            <textarea onChange={(e)=>setNoteContent(e)} value={noteContent} className="h-3/4 border-8 border-black p-3"> </textarea>
                        </div>
                        <div className="flex space-x-4 justify-center my-3">
                            <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' onClick={()=>closeModal()}

                            >
                            Cancel</button>
                            <button type="button" className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' onClick={(e)=>handleEditANote(e)}>Update</button>

                        </div>
                    </div>
                </div>

            </div>
            )
            }
        </div>
    </div>
  )
}

export default EditModal