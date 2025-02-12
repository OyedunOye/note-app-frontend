const ButtonWithIcon = ({label, icon}) => {
  return (
    <div>
      <button className='bg-green-900 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>{label} {icon} </button>
    </div>
  )
}

export default ButtonWithIcon