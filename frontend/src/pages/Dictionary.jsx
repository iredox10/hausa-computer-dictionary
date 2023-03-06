import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Search from '../components/Search'
import useFetch from '../hooks/UseFetch'
import UseFetch from '../hooks/UseFetch'
import Words from './Words'

export default function Dictionary() {
    const [data, setData] = useState()
    const [err, setErr] = useState()
// useEffect(() => {
//   const fetch = async () => {
//     try {
//       const res = await axios.get("http://localhost:3003/words")
//       setData(res.data)
//     } catch (err) {
//       setErr(err)
//       console.log(err)
//     }
//   }
//   fetch()
// }, [])

  const { data: words, err: error } = useFetch('http://localhost:3003/get-words')
  

  return (
      <div className=''>
          <Menu />
          <Search placeholder={'Rubuta Kalma Anan...'} />
          <div className='mx-5 shadow-lg'>
        {words && words.map(word => (
                <Link to={`/word/${word._id}`}>
                  <Words word={word} />
          </Link>
              ))}
          </div>
    </div>
  )
}
