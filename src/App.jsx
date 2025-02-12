import './index.css'
import { Routes, Route } from "react-router-dom";
import { LandingPage, LogInPage, NoteReader, SignUpPage } from './pages'

function App() {

  return (

    <main className='min-h-screen'>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/login' element = {<LogInPage />}/>
        <Route path='/register' element = {<SignUpPage />}/>
        <Route path='/note' element = {<NoteReader />} />
      </Routes>
    </main>

  )
}

export default App

// {/* <div className='flex flex-col w-full h-full'> */}
// <div className='mx-auto'>
// {/* <SignUpPage /> */}
// </div>

// <div className='mx-auto'>
// <LogInPage />
// </div>
