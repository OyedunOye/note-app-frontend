import { Link } from 'react-router'
import { IoIosCloseCircle } from "react-icons/io";
import logo from '../assets/note-app-logo.png'



const NoteReader = () => {

  const selectedNote = {
      title: "God is good",
      content: "God is good all the time, and all the time, God is good!"
    }


  return (
    <div className="flex w-full mx-auto min-h-screen rounded-md bg-gradient content-center justify-center p-5">
      <div className="flex-col w-2/3 h-full">
        <img src={logo} alt="logo" width={80} height={40} className='py-4 px-3 cursor-pointer absolute top-2 left-1' />
        <Link to="/notes" className="flex justify-end absolute right-1 top-2 py-4 px-3 bg-transparent">
          <IoIosCloseCircle className="flex w-10 size-6 bg-transparent" length="lg" />
        </Link>
        <div className="flex flex-col gap-10">
          <h3 className="text-center font-medium text-5xl my-6 max-sm:font-semibold max-sm:text-2xl max-sm:mb-0 max-sm:mt-14">Title: {selectedNote.title}</h3>
          <p className="h-72 border-8 border-black rounded-md p-3 max-sm:h-80">{selectedNote.content}</p>
          <div className="flex justify-center my-3">
            <Link to="/notes">
              <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Return</button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default NoteReader