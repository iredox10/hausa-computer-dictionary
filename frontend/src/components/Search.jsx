import React from 'react'
import { FaArrowDown, FaSearch } from 'react-icons/fa'

export default function Search({placeholder}) {
  return (
    <div className='flex items-center gap-5 m-6 p-2 rounded-lg bg-white'>
      <div className=''>
        <FaSearch />
      </div>
      <div className='flex-1'>
        <input type='text' className=' px-2 w-full' placeholder={placeholder} />
      </div>
      <div className='relative'>
        <FaArrowDown />
        <div className='absolute bg-white right-0 top-5 capitalize'>
          <button className='capitalize mb-2 p-1 hover:bg-primary-color hover:text-white '>
            english
          </button>
          <button className='capitalize p-1 hover:bg-primary-color hover:text-white'>hausa</button>
        </div>
      </div>
    </div>
  )
}
