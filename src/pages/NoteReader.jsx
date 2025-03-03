import { Link, useNavigate } from 'react-router'
import { IoIosCloseCircle } from "react-icons/io";
import logo from '../assets/note-app-logo.png'
import { useEffect, useState } from 'react';
import { deleteAnExistingNote, editAnExistingNote, getSingleUserNote } from '../services/auth.service';
import { toast } from 'react-toastify';
import { IoTrashBinOutline } from 'react-icons/io5';
import { LuPencilLine } from 'react-icons/lu';
import { Confirmation } from '../components';


const NoteReader = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState('')
  const [confirmDeletion, setConfirmDeletion] = useState(false)
  const noteId = localStorage.getItem("id")

  const navigate = useNavigate()

  const deleteConfirmation = (e) =>{
    setConfirmDeletion(true)
  }

  const handleGetASingleNote = async()=>{
    try {
      // console.log(noteId)
      const data = await getSingleUserNote(noteId)
      setTitle(data.note[0].title)
      setContent(data.note[0].content)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
      handleGetASingleNote()
    }, [noteId])

  const handleEdit = async(e)=>{
    e.preventDefault();
    const credentials = {
      title,
      content
    }
    if (title!=="" && content !== ""){
      try {
        const data = await editAnExistingNote(noteId, credentials)
        toast(data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/notes")
      } catch (error) {
        console.log(error)
      }
    } else {
      toast("Neither the title nor the content can be empty, delete the note instead!", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleDelete = async()=>{
    try {
      await deleteAnExistingNote(noteId)
      toast("Note deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/notes")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
    {confirmDeletion && <Confirmation handleDelete={handleDelete} setConfirmDeletion={()=>setConfirmDeletion(false)} />}
    <div className="flex w-full mx-auto min-h-screen rounded-md bg-gradient content-center justify-center p-5 overflow-hidden">
      <div className="flex-col w-2/3 h-full">
      <Link to="/notes">
        <img src={logo} alt="logo" width={80} height={40} className='py-4 px-3 cursor-pointer absolute top-2 left-1' />
        <div className="flex justify-end absolute right-1 top-2 py-4 px-3 bg-transparent">
          <IoIosCloseCircle className="flex w-10 size-6 bg-transparent" length="lg" />
        </div>
        </Link>
        <form className="flex flex-col gap-10 max-sm:gap-4">
          <input type='text' className="text-center font-medium text-2xl my-6 max-sm:font-semibold max-sm:text-2xl max-sm:mb-0 max-sm:mt-14 rounded-md" onChange={(e)=>setTitle(e.target.value)} value={title} />
          <textarea type="text" className="h-72 border-8 border-black rounded-md p-3 max-sm:h-80" onChange={(e)=>setContent(e.target.value)} value={content}/>
          <div className="flex justify-between my-3 max-sm:flex-col max-sm: gap-4">
            <Link to="/notes" className='max-sm:justify-center flex'>
              <button type="button"  className='bg-blue-600 hover:bg-blue-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Return</button>
            </Link>
            <div className='flex gap-4'>
              <button type="button" className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'onClick={deleteConfirmation} >Delete<IoTrashBinOutline className='flex my-1 mx-2' /> </button>
              <button type="button" className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2' onClick={handleEdit} >Update<LuPencilLine className='flex my-1 mx-2' /> </button>
            </div>

          </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default NoteReader