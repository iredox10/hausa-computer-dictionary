import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import TextInput from '../components/TextInput'
import UseFetch from '../hooks/UseFetch'
import Title from './Title'

export default function Home() {
  const [data, setData] = useState([])
  const [err, seterr] = useState()
  const [category, setcategory] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('http://localhost:3003/categories')
        setData(res.data)
        // console.log(data)
      } catch (err) {
        seterr(err)
      }
    }
    fetch()
  }, [])

  useMemo(() => {
      setcategory([...data,data])
  }, [data])
  return (
    <div>
      <Header />
      <div className='text-center text-white my-8'>
        <h1 className='uppercase text-2xl font-bold pb-3'>
          <span className='block'>barka da zuwa</span>
          <span>hausa computer dictionary</span>
        </h1>
        <p className='px-20'>
          zaka samu duka bayanan da suka danganci computer anan, cikin
          saukakakkiyar hausa
        </p>
      </div>
      <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
        <div flex justify-end w-full>
          <TextInput
            type={"search"}
            name='search'
            style={"border-b-2 border-primary-color"}
          />
        </div>
        <Title title={'Rukunai'} color='text-primary-color' />
        {data &&
          data.map((d) => (
            <div className='mb-3'>
              <Main data={d} />
            </div>
          ))}
      </div>
    </div>
  )
}
