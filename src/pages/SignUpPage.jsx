import { InputContainer, Button } from "../components"
import logo from "../assets/note-app-logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { createUser } from "../services/auth.service";
import { validateConfirmPassword, validateEmail, validateFirstName, validateLastName, validatePassword, validateRegisterDetails } from "../utils";
import { toast } from 'react-toastify';


export const ErrorMessage = ({message}) => {
  return (
    <p className="text-red-600 text-sm mt-0">{message}</p>
  );
 };

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const navigate = useNavigate()

  const handleUserRegistration = async (e) => {
    e.preventDefault();
    const credentials = {
      firstName,
      lastName,
      email,
      password
    }

    const firstNameValidation = validateFirstName(firstName)

    if(firstNameValidation === "INVALID"){
      setFirstNameError("First name must have at least 3 characters")
    } else {setFirstNameError("")}

    const lastNameValidation = validateLastName(lastName)

    if(lastNameValidation === "INVALID"){
      setLastNameError("Last name must have at least 3 characters")
    } else {setLastNameError("")}

    const emailValidation = validateEmail(email)

    if(emailValidation === false) {
      setEmailError("Enter a valid email")
    } else {setEmailError("")}

    const passwordValidation = validatePassword(password)

    if(passwordValidation === "INVALID"){
      setPasswordError("Passoword must have at least 6 characters")
    } else {setPasswordError("")}

    const confirmPasswordValidation = validateConfirmPassword(password, confirmPassword)

    if(confirmPasswordValidation === "INVALID"){
      setConfirmPasswordError("The password and confirm password must match")
    } else {setConfirmPasswordError("")}


    try {
      console.log("successfully entered try block")
      const validate = validateRegisterDetails(credentials)
      if(validate === "VALIDATED") {
        const data = await createUser(credentials)
        toast(data.message, {
          position: "top-right",
          autoClose: 5000,
          // hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        navigate("/login")
      }
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <div className="bg-gradient min-h-screen">
      {/* <div className='flex flex-col items-center content-center border-4 gap-6 bg-slate-700'>
        <h1 className='text-6xl w-full capitalize text-white'>Log in to your account</h1>
        <p className='text-white w-1/2'>We are trusted by over 1,000 clients as the perfect place to keep their ideas securely!</p>
        </div> */}
      <div className='flex items-start justify-center w-20 py-6'>
        <img src={logo} alt="logo" width={60} height={30} />
      </div>
      <div className=' w-10/12 sm:items-center sm:justify-center'>
          <div className='w-full py-8 px-12 flex flex-col max-sm:px-4 max-sm:py-2'>
            <h1 className='text-3xl mb-4 max-sm:text-2xl'>Hello, and Welcome!</h1>
            <h2 className='text-2xl mb-10 max-sm:text-xl'>Register</h2>
            <form onSubmit={(e)=>handleUserRegistration(e)} className='w-full'>
              <div className='flex flex-col w-1/2 gap-3 mb-2'>

              {firstNameError && (
                <ErrorMessage message={firstNameError} />
              )}
                <InputContainer placeholder="First Name" type="text"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  className=''
                />

              {lastNameError && (
                <ErrorMessage message={lastNameError} />
              )}
                <InputContainer placeholder="Last Name" type="text"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)} />

              {emailError && (
                <ErrorMessage message={emailError} className="border" />
              )}
                <InputContainer placeholder="Email" type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)} />

              {passwordError && (
                <ErrorMessage message={passwordError} />
              )}
                <InputContainer placeholder="Password" type="password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />


              {confirmPassword && (
                <ErrorMessage message={confirmPasswordError} />
              )}
                <InputContainer placeholder="Confirm Password" type="password"
                  value={confirmPassword}
                  onChange={(e)=>(setConfirmPassword(e.target.value))}
                />

              </div>

              <div className="mt-4">
                <Button label="Sign Up" type="submit" className="mt-6" />
              </div>

              <div className='flex flex-col my-6 gap-6'>
                <p className="max-sm:text-sm max-sm:pr-4">Already registered, please click below button to login to your account.</p>
                <Link to="/login">
                  <Button type="submit" label="Log In" className="capitalize" />
                </Link>
              </div>

            </form>
          </div>
        </div>
    </div>
  )
}

export default SignUpPage