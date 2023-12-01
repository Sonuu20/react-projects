import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Note({ id, text, date, handleDeleteNote}) {
  return (
    <div className=' bg-yellow-300 p-1 min-h-176  h-auto rounded-lg flex flex-col break-words justify-between whitespace-pre-wrap'>
        <span className=' overflow-auto'>{text}</span>
        <div className='flex justify-between items-center'>
            <small>{date}</small>
            <img src="https://static.thenounproject.com/png/1862428-200.png" alt="close" className='h-5 m-1 cursor-pointer ' 
            onClick={() => handleDeleteNote(id)}
            />
        </div>
    </div>
  )
}

export default Note