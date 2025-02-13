import { Link } from 'react-router'
import logo from '../assets/note-app-logo.png'
import { Button, InputContainer } from '../components'


const LogInPage = () => {
  return (

    <div className='bg-gradient h-screen  max-sm:w-full sm:px-3'>
      <div className='flex items-start justify-center w-20 py-6'>
        <img src={logo} alt="logo" width={60} height={30} />
      </div>

      <div className='w-10/12 flex sm:items-center sm:justify-center'>
          <div className='w-full py-16 px-12 flex flex-col max-sm:px-4 max-sm:py-2'>
            <h1 className='text-3xl mb-4 max-sm:text-2xl'>Welcome back!</h1>
            <h2 className='text-2xl mb-10 max-sm:text-xl'>Log In</h2>
            <form action=''className='w-full'>
              <div className='flex flex-col w-1/2 gap-5 mb-2'>
                <InputContainer placeholder="Email" type="text" className=""/>
                <InputContainer placeholder="Password" type="password" className=""/>
              </div>

              <div className='mt-4'>
                <Button label="Log In" className="mt-6" />
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