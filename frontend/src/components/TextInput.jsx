import React from 'react'

export default function TextInput({placeholder,type,name,state,value}) {
  return (
    <div className='px-10 mb-7'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='outline-none border-b-2 border-primary-color  w-full p-1 capitalize'
        onChange={state}
        value={value}
      />
    </div>
  )
}
