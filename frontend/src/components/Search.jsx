import React, { useState } from 'react'
import { FaArrowDown, FaSearch } from 'react-icons/fa'

export default function Search({ placeholder, setEnglishSearch, setHausaSearch, englishSearch, onSearch}) {
  const [showOption, setShowOption] = useState(false)
  const handleSelection = () => {
    
  }
  return (
    <div className='flex items-center gap-5 m-6 p-2 rounded-lg bg-white'>
      <div className=''>
        <FaSearch />
      </div>
      <div className='flex-1'>
        <input
          type='text'
          className=' px-2 w-full'
          placeholder={englishSearch ? 'Type Word...' : 'Rubuta kalma...'}
          onChange={onSearch}
        />
      </div>
      <div>
        <button onClick={() => setShowOption(!showOption)} className='relative'>
          <FaArrowDown />
        </button>
          {showOption && (
            <div className='absolute bg-white w-48 flex flex-col right-0 top-32 capitalize'>
            <button className='capitalize mb-2 p-1 hover:bg-primary-color hover:text-white' onClick={() => {
              setShowOption(!showOption)
              setHausaSearch(false)
              setEnglishSearch(true)
            }
            }>
                search in english
              </button>
            <button className='capitalize p-1 hover:bg-primary-color hover:text-white' onClick={() => {
              setShowOption(!showOption)
              setEnglishSearch(false)
              setHausaSearch(true)
            }}>
                search hausa
              </button>
            </div>
              )}
      </div>
    </div>
  )
}
