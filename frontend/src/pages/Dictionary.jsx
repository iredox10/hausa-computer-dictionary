import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaBookmark } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Search from '../components/Search'
import { UseAuthContext } from '../hooks/UseAuthContext'
import useFetch from '../hooks/UseFetch'
import UseFetch from '../hooks/UseFetch'
import Words from './Words'

export default function Dictionary() {
    // const [data, setData] = useState()
  const [err, setErr] = useState()
  const [word, setWord] = useState()
  const [hausaSearch, setHausaSearch] = useState(false)
  const [englishSearch, setenglishSearch] = useState(false)
  const [search, setSearch] = useState('')


  const { data:words, error } = useFetch('http://localhost:3003/get-words')

  const { state } = UseAuthContext()
  const user = state.user
  const userId = user && user.user._id
  const navigate = useNavigate()

  const viewWord = async (wordId) => {
    !user && navigate(`/word/${wordId}`)
    if (user) {
      // console.log(user)
      const word = await axios.get(`http://localhost:3003/get-word/${wordId}`)
      setWord(word.data)
      try {
        const res = await axios.post('http://localhost:3003/user/add-history', { user, word })
        console.log(res.data)
        navigate(`/word/${wordId}`)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className='bg-primary-color h-min-screen'>
      <Search
        englishSearch={englishSearch}
        setEnglishSearch={setenglishSearch}
        setHausaSearch={setHausaSearch}
        onSearch={(e) => setSearch(e.target.value)}
      />
      <div className='mx-5 shadow-lg pb-5'>
        {words &&
          words
            .filter((word) => {
              if (search === "") {
                return word
              } else if (
                hausaSearch &&
                word.wordInHausa.toLowerCase().includes(search.toLowerCase())
              ) {
                return word
              } else if (
                englishSearch &&
                word.word.toLowerCase().includes(search.toLowerCase())
              ) {
                return word
              } else if (englishSearch === false && hausaSearch === false) {
                return word.wordInHausa.toLowerCase().includes(search.toLowerCase())
              }
            })
            .map((word) => (
              <div key={word._id}>
                <button
                  onClick={() => viewWord(word._id)}
                  className='block w-full text-start'
                >
                  {/* <Words word={word} /> */}
                  <div className='bg-white mt-10 p-5 hove:bg-secondary-color hover:shadow-lg rounded-lg'>
                    <div className='flex items-center gap-5 capitalize'>
                      <p className='text-secondary-color'>
                        <span className='block font-bold text-xl text-primary-color'>
                          {word.word}
                        </span>
                        english
                      </p>
                      <div>
                        <FaArrowRight />
                      </div>
                      <p className='text-secondary-color'>
                        <span className='block font-bold text-xl text-primary-color'>
                          {word.wordInHausa}
                        </span>
                        hausa
                      </p>
                    </div>
                    <div className='flex items-center gap-10 mt-3'>
                      <p className='flex-1'>{word.explanations[0]}</p>
                      <Link to={`/favorite/${word._id}`}>
                        <FaBookmark className='text-2xl' />
                      </Link>
                    </div>
                  </div>
                </button>
              </div>
            ))}
      </div>
    </div>
  )
}
