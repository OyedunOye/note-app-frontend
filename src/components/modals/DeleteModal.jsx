import { IoIosCloseCircle } from "react-icons/io";


const DeleteModal = ({ noteTitle, noteContent, closeModal}) => {
  return (
    <div className='fixed top-0 left-0 bg-black/80 w-full h-full z-[999]'>
        <div className='h-full w-full flex items-center justify-center'>
            <div className=" h-[600px] w-[500px] mt-12 relative">
                <div className="flex w-full rounded-md bg-gradient p-5 ">
                    <div className="flex-col p-3">
                        <button onClick={closeModal} className="flex justify-end bg-transparent absolute -right-2 top-0">
                            <IoIosCloseCircle type="button" className="flex w-10 size-6 bg-transparent" length="sm" />
                        </button>
                        <h3 className="font-extrabold text-center text-3xl">Are you sure you want to delete this note?</h3>
                        <p className="text-center text-xl my-2">Title: {noteTitle}</p>
                        <div className="flex flex-col border-8 border-black">
                            <p type="text" className="bg-white  h-16 border-8 border-black p-3 overflow-y-auto">{noteTitle}</p>
                            <div className="h-32 overflow-y-auto border-8 border-black p-3 bg-white">{noteContent}</div>
                        </div>
                        <div className="flex space-x-4 justify-center my-3">
                            <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' onClick={()=>closeModal()}>Cancel</button>
                            <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Delete</button>

                        </div>
                    </div>
                </div>

            </div>
      </div>
    </div>
  )
}

export default DeleteModal