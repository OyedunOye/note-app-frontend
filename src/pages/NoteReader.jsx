const NoteReader = () => {
  const selectedNote = {
    title: "God is good",
    content: "God is good all the time, and all the time, God is good!"
  }

  return (
    <div>
      <div>
        <h1>Are you sure you want to edit this note?</h1>
        <p>Title: {selectedNote.title}</p>
        <div>
          <input type="text">{selectedNote.title}</input>
          <textarea>{selectedNote.content}</textarea>
        </div>
        <div>
          <button className='bg-green-900 hover:bg-green-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Cancel</button>
          <button className='bg-red-600 hover:bg-red-400 w-36 h-10 text-white rounded-md flex justify-center content-center p-2'>Update</button>
          
        </div>
      </div>
    </div>
  )
}

export default NoteReader