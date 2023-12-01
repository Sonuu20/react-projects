import React, { useState } from 'react'

function Search({handleSearchNote}) {

  return (
    <div className='search flex items-center bg-gray-300 rounded-xl mt-1 p-1'>
         <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="search" className='h-5 m-1 cursor-pointer ' />
         <input type="text" placeholder='type of search..' className='ml-1 border-none bg-gray-300 focus:outline-none' onChange={(event) => handleSearchNote(event.target.value)}/>
    </div>
  )
}

export default Search