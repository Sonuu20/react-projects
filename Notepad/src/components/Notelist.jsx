import React from 'react'
import Note from './NOte'
import AddNote from './AddNote'

function Notelist( {notes, handleAddNote, handleDeleteNote} ) {
  return (
    <div className=' grid gap-2 grid-cols-custom m-3 md:m-5 items-center'>
      {notes.map((note) => <Note  
      id={note.id} 
      text={note.text} 
      date={note.date}  
      handleDeleteNote={handleDeleteNote} 
      />)}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default Notelist