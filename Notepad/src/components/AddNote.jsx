import React, { useState } from 'react'

function AddNote({handleAddNote}) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;
  
  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }

  const handleSave = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText('');
    }else{
      setNoteText('');
    }
  }
  return (
    <div className='bg-[#60c2b8] p-1 min-h-176 rounded-lg flex flex-col justify-between'>
        <textarea rows={5}
         cols={10} 
         placeholder='Type to add note..'
         className=' border-none resize-none bg-[#67d7cc] focus:outline-none'
         value={noteText}
         onChange={handleChange} ></textarea>
        <div className='note-footer flex justify-between items-center'>
            <small>{characterLimit - noteText.length} remaining</small>
            <button className=' bg-[#e1e1e1] border-none rounded-2xl p-custom m-1 w-20 hover:bg-[#ededed] cursor-pointer'
            onClick={handleSave}
            >Save</button>
        </div>
    </div>
  )
}

export default AddNote