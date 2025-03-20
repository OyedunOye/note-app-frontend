import logo from '../assets/note-app-logo.png'
import { LuSendHorizontal } from "react-icons/lu";
import { NotesContainer } from '../components/index';
import { Link } from 'react-router';
import { getUserDetailsFromToken, toasterAlert } from '../utils';
import { createANewUserNote } from '../services/auth.service';
import { useState } from 'react';


const LandingPage = () => {

  const token = localStorage.getItem("noteToken");
  const user = getUserDetailsFromToken(token).firstName;
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const clearForm = () => {
    setContent("")
    setTitle("")
  }

  const handleAddNewNote = async (e) => {
      e.preventDefault();
      const credentials = {
        title,
        content
      }

      try {
        if (title == "" || content == "") {
          toasterAlert("Neither the title nor the note content can be empty!")
        } else if(title !== "" && content !== "") {
          const data = await createANewUserNote(credentials)
          toasterAlert(data.message)
          clearForm()
          window.location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    }

  //this function clears user token upon them logging out, so they would be required to login in again before they could access the app homepage.
  const handleClearToken = () =>{
    localStorage.clear()
    setIsLoggingOut(true)
  }


  return (
    <>
    {/* {window.onload = ()=>handleGetUserNotes()} */}
    {isLoggingOut? (
      <div className='flex fixed top-0 left-0 bg-black/80 w-full h-full z-[999]'>
        <div className="flex flex-col items-center justify-center w-full">
          <BiLoaderCircle className="h-8 w-8 text-white animate-spin" />
          <p className='text-2xl'>Logging out</p>
        </div>
      </div>
    ) : (
      <div className="min-h-screen w-full bg-gradient overflow-hidden">
        <div className='bg-gradient md:sticky top-0 left-0 h-1/2 z-10 border-b-2 border-b-green-900'>
          <div className='flex w-full justify-between'>
            <Link to="/notes"><img src={logo} alt="logo" width={80} height={40} className='py-4 px-3 cursor-pointer' /></Link>
            <Link onClick={handleClearToken} to="/login" className='content-center mr-4 text-green-900 text-md font-bold underline hover:text-[#ffffff] p-1 rounded-full'>
              Log Out
            </Link>
          </div>

          <div className='flex flex-col w-2/3 mx-auto py-1 gap-6 items-center'>
            <h1 className='font-semibold text-4xl text-center max-sm:text-lg'>Hello {user}! Welcome to Jotter</h1>
            <form onSubmit={(e)=>handleAddNewNote(e)} className='flex flex-col w-full mx-auto py-1 gap-4 items-center'>
              <input name='title' type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter the title of your note...' className='h-10 w-full px-2 rounded-md shadow-md bg-white' />
              <textarea name='content' value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Enter your note content...' className='h-28 w-full px-2 rounded-md shadow-md bg-white'></textarea>
              <div className='w-full flex justify-end'>
                <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' type='submit'>Add Note <LuSendHorizontal className='flex my-1 mx-2' /> </button>
              </div>
            </form>
          </div>

        </div>
        <div className='content-center'>
          <NotesContainer />
        </div>
      </div>
    )}
    </>
  )
}

export default LandingPage