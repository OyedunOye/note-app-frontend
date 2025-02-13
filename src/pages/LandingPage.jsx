import logo from '../assets/note-app-logo.png'
import { LuSendHorizontal } from "react-icons/lu";
import { Button, NotesContainer } from '../components';
import { Link } from 'react-router';
import { useState } from 'react';
// import { ButtonWithIcon } from '../components';

const LandingPage = () => {
  const user = {firstName: "Shade"}
  return (
    <div className="min-h-screen w-full bg-gradient divide-y-2 divide-green-900 opacity-100">
      <div className='md:sticky top-0 left-0 h-1/4 z-10 opacity-100'>
        <div className='flex w-full justify-between'>
          <img src={logo} alt="logo" width={80} height={40} className='py-4 px-3 cursor-pointer' />
          <Link to="/login" className='content-center mr-4'>
            <a href='' className='content-center mr-4 text-green-900 text-md font-bold underline hover:text-[#ffffff] p-1 rounded-full'> Log Out </a>
          </Link>
        </div>
        <div className='flex flex-col w-2/3 mx-auto py-1 gap-6 items-center'>
          <h1 className='font-semibold text-5xl text-center mt-2 max-sm:text-lg'>Hello {user.firstName}! Welcome to Jotter</h1>
          <form className='flex flex-col w-full mx-auto py-1 gap-6 items-center'>
            <input type='text' placeholder='Enter the title of your note...' className='h-12 w-full px-2 rounded-md shadow-md bg-white' />
            <textarea placeholder='Enter your note content...' className='h-40 w-full px-2 rounded-md shadow-md bg-white'></textarea>
            <div className='w-full flex justify-end'>
              <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Add Note <LuSendHorizontal className='flex my-1 mx-2' /> </button>

              {/* <ButtonWithIcon label="Add Note" icon={LuSendHorizontal} /> */}
            </div>
          </form>
        </div>

      </div>
      <div className='content-center  '>
        <NotesContainer />
      </div>
    </div>
  )
}

export default LandingPage