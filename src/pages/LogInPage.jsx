import { Link, useNavigate } from 'react-router'
import { useState } from "react";
import logo from '../assets/note-app-logo.png'
import { Button, InputContainer } from '../components'
import { validateEmail, validateLoginDetails, validatePassword } from "../utils";
import { getUserNotes, loginUser } from '../services/auth.service';
import { ErrorMessage } from './SignUpPage';
import { toast } from 'react-toastify';


const LogInPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [emailError, setEmailError] = useState("")


  const navigate = useNavigate()

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password
    }

    const emailValidation = validateEmail(email)
    // console.log(emailValidation)

    if (emailValidation === false){
      setEmailError("Enter a valid email")
    }

    if (emailValidation === true){
      setEmailError("")
    }

    const passwordValidation = validatePassword(password)
    if (passwordValidation === "INVALID"){
      setPasswordError("Passoword must have at least 6 characters")
    }

    if (passwordValidation === "VALID"){
      setPasswordError("")
    }

    try {
      const validate = validateLoginDetails(credentials)
      if(validate==="VALIDATED"){
        const data = await loginUser(credentials)
        window.localStorage.setItem("noteToken", data.token )
        toast(data.message, {
          position: "top-right",
          autoClose: 5000,
          // hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
        const token = localStorage.getItem("noteToken");
        await getUserNotes()
        navigate("/notes")
      }
    } catch (error) {
      console.log(error)
    }


    // const data = await loginUser(credentials)
    // console.log(data)
    // console.log(validate)
  }

  return (

    <div className='bg-gradient min-h-screen  max-sm:w-full sm:px-3'>
      <div className='flex items-start justify-center w-20 py-6'>
        <img src={logo} alt="logo" width={60} height={30} />
      </div>

      <div className='w-10/12 flex sm:items-center sm:justify-center'>
          <div className='w-full py-16 px-12 flex flex-col max-sm:px-4 max-sm:py-2'>
            <h1 className='text-3xl mb-4 max-sm:text-2xl'>Welcome back!</h1>
            <h2 className='text-2xl mb-10 max-sm:text-xl'>Log In</h2>
            <form onSubmit={(e)=>handleUserLogin(e)} className='w-full'>
              <div className='flex flex-col w-1/2 gap-3 mb-2'>

                {emailError && (<ErrorMessage message={emailError} />)}
                <InputContainer placeholder="Email" type="email" className=""
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  // onBlur={()=>setEmail({...email, isTouched:true})}
                />

                {passwordError && (<ErrorMessage message={passwordError} />)}
                <InputContainer placeholder="Password" type="password" className=""
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  // onBlur={(e)=>setPassword({...password, isTouched:true})}
                />

              </div>

              <div className='mt-4'>
                <Button type='submit' label="Log In" className="mt-6" />
              </div>
              <p className="my-6">New to us?</p>
              <Link to="/register">
                <Button label="sign Up" className="" />
              </Link>

            </form>
          </div>
      </div>
    </div>
  )
}

export default LogInPage