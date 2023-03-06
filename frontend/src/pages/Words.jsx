import React from 'react'
import {Link} from 'react-router-dom'
export default function Word({ word}) {
  return (
      <div className='bg-white mt-10 p-2 rounded-lg'>
          <div className='flex gap-20'>
              <p><span className='block'>word</span>{ word.word}</p>
              <p><span className='block'>word in hausa</span>{ word.wordInHausa}</p>
      </div>
      <div className="flex items-center gap-10 mt-3">
        <p className='flex-1'>{word.explanations[0]}</p>
        <Link to={`/favorite/${word._id}`}>add f</Link>
      </div>
    </div>
  )
}
