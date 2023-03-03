import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='text-center text-white my-8'>
        <h1 className='uppercase text-2xl font-bold pb-3'><span className='block'>barka da zuwa</span> <span>hausa computer dictionary</span></h1>
        <p className='px-20'>zaka samu duka bayanan da suka danganci computer anan, cikin saukakakkiyar hausa</p>
      </div>
      <Main />
    </div>
  )
}
