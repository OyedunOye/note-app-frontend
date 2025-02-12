const Button = ({ label }) => {
  return (

    <button className="flex w-40 justify-center bg-green-900 text-white items-center px-7 py-4 rounded-full text-lg leading-none hover:bg-green-400" >
        {label}
    </button>
  )
}

export default Button