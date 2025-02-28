const InputContainer = ({  placeholder, type, value, onChange }) => {
  return (
    <div className="">
      <input id={type} type={type} placeholder={placeholder} value={value} onChange={onChange} className="border border-gray-400 py-2 px-2 min-w-full rounded-sm" />
    </div>
  )
}

export default InputContainer