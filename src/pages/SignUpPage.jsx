import { InputContainer, Button } from "../components"
import logo from "../assets/note-app-logo.png"
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <section className="bg-gradient min-h-screen">
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
            <form action=''className='w-full'>
              <div className='flex flex-col w-1/2 gap-5 mb-2'>
                <InputContainer placeholder="First Name" type="text" className="" />
                <InputContainer placeholder="Last Name" type="text" />
                <InputContainer placeholder="Email" type="text" className=""/>
                <InputContainer placeholder="Password" type="password" className=""/>
                <InputContainer placeholder="Confirm Password" type="password" className=""/>
              </div>
              <div className="mt-4">
                <Button label="Sign Up" className="mt-6" />
              </div>
              <div className='flex flex-col my-6 gap-6'>
                <p className="max-sm:text-sm max-sm:pr-4">Already registered, please click below button to login to your account.</p>
                <Link to="/login">
                  <Button label="Log In" className="capitalize" />
                </Link>
              </div>

            </form>
          </div>
        </div>
    </section>
  )
}

export default SignUpPage