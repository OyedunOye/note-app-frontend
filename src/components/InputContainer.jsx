const InputContainer = ({  placeholder, type }) => {
  return (
    <div className="">
      <input type={type} placeholder={placeholder} className="border border-gray-400 py-1 px-2 min-w-full rounded-sm" />
    </div>
  )
}

export default InputContainer