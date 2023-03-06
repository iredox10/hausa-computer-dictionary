import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Title from './Title'

export default function Register() {
    const [first, setfirst] = useState()
  return (
    <div>
      <div>
        <h1></h1>
      </div>
      <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
        <Title title={"Rijista"} />
        <div>
          <TextInput name={"suna"} type={"text"} placeholder='cikakken suna' />
          <TextInput name={"suna"} type={"text"} placeholder='username' />
          <TextInput name={"suna"} type={"text"} placeholder='zabi password' />
          <TextInput name={"suna"} type={"text"} placeholder='zabi password' />
        </div>
        <div className='text-center mt-20'>
          <Button link={"/register"} text={"regista"} style='px-24 py-2' />
          <p className='mt-4'>kana da account? <Link to={'/login'} className='underline text-primary-color'>login</Link></p>
        </div>
      </div>
    </div>
  )
}
