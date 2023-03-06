import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Header() {
  return (
    <div className='text-white p-4 flex justify-between'>
      <Link to={`/`} className='text-white'>logo</Link>
      <div>
        <Button link={"/register"} text='register' />
      </div>
    </div>
  )
}
