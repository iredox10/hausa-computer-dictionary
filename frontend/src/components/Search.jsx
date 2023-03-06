import React from 'react'

export default function Search({placeholder}) {
  return (
      <div className='flex items-center m-6 p-2 rounded-lg bg-white'>
          <p>icon</p>
      <input type="text" className='flex-1 px-2' placeholder={ placeholder} />
          <p>arrow icon</p>
    </div>
  )
}
