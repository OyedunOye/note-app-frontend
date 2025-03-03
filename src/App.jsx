import { Bounce, ToastContainer } from 'react-toastify';
import './index.css'
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogInPage, NoteReader, SignUpPage } from './pages'
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState(null)
  useEffect(()=>{
    const storageToken = localStorage.getItem("noteToken")
    setToken(storageToken)
  }, [])

  return (

    <main className='min-h-screen'>
      <Routes>
        <Route path='/notes' element = {<LandingPage />}/>
        <Route path='/' element = {token?<LandingPage />:<LogInPage />}/>
        <Route path='/login' element = {<LogInPage />}/>
        <Route path='/register' element = {<SignUpPage />}/>
        <Route path='/notes/note' element = {<NoteReader />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </main>

  )
}

export default App