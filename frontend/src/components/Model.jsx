import React from 'react'

export default function Model({ remove,cancel}) {
  return (
      <div className='absolute flex gap-5 bg-secondary-color top-2/4 left-2/4 transform -translate-x-10 text-white text-3xl'>
          <button className='' onClick={remove} >yes</button>
          <button className='' onClick={cancel} >no</button>
      </div>
  )
}
