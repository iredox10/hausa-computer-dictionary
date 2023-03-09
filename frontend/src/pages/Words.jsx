import React from 'react'
import { FaArrowRight, FaBookmark } from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Word({ word}) {
  return (
    <div className='bg-white mt-10 p-5 hove:bg-secondary-color hover:shadow-lg rounded-lg'>
      <div className='flex items-center gap-5 capitalize'>
        <p>
          <span className='block font-bold text-xl'>word</span>
          {word.word}
        </p>
        <div>
          <FaArrowRight />
        </div>
        <p>
          <span className='block font-bold text-xl'>word in hausa</span>
          {word.wordInHausa}
        </p>
      </div>
      <div className='flex items-center gap-10 mt-3'>
        <p className='flex-1'>{word.explanations[0]}</p>
        <Link to={`/favorite/${word._id}`}>
          <FaBookmark className='text-2xl' />
        </Link>
      </div>
    </div>
  )
}
