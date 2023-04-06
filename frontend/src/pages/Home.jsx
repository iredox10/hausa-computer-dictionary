import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
        const res = await axios.get('http://localhost:3003/get-categories')
        setData(res.data)
        console.log(data)
      } catch (err) {
        seterr(err)
      }
    }
    fetch()
  }, [])

  useMemo(() => {
    setcategory([...data, data])
  }, [data])
  return (
    <div>
      <div className='text-center text-white my-8'>
        <h1 className='uppercase text-2xl font-bold pb-3'>
          <span className='block'>barka da zuwa</span>
          <span>hausa computer dictionary</span>
        </h1>
        <p className='px-20 capitalize'>
          zaka samu duka bayanan da suka danganci computer anan, cikin
          saukakakkiyar hausa.
        </p>
      </div>
      <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
        <div className=' flex justify-center mb-5 w-full'>
          {/* <TextInput
            type={"search"}
            name='search'
            style={"border-b-2 border-primary-color"}
          /> */}
          <Link to='/dictionary'>
            <FaSearch className='text-center text-xl' />
          </Link>
        </div>
        <Title title={"Rukunai"} color='text-primary-color' />
        {data &&
          data.map((d,i) => (
            <div className='mb-3' key={i}>
              <Main data={d} />
            </div>
          ))}
      </div>
    </div>
  )
}
