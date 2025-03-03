const Confirmation = ({handleDelete, setConfirmDeletion}) => {
  return (
    <div className=' flex fixed top-0 left-0 bg-black/80 w-full h-full z-[999]'>
      <div className='justify-center items-center flex border border-white w-full'>
        <div className='w-1/3 h-1/3 flex-col flex bg-gradient gap-20 max-sm:w-[80%] max-sm:h-fit max-sm:gap-10 md:h-fit'>
        <h1 className='text-center font-bold py-3'>Are you sure you want to delete this note? Deleted notes cannot be retrieved.</h1>
        <div className='content-center justify-center flex  gap-4 max-sm: pb-4'>
          <button className='bg-red-600 w-14 rounded-md text-white items-center' onClick={()=>{handleDelete()
            setConfirmDeletion()
          }}>Yes</button>
          <button className='bg-green-900 w-14 rounded-md text-white items-center p-1' onClick={()=>setConfirmDeletion()}>No</button>
        </div >
      </div>
      </div>
    </div>
  )
}

export default Confirmation