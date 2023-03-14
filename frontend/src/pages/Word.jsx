import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import Menu from "../components/Menu"
import { FaBookmark, FaCopy, FaExclamationCircle, FaHistory, FaSearch, FaStar } from "react-icons/fa"
import { UseAuthContext } from "../hooks/UseAuthContext"


export default function Word() {
  const { id } = useParams()
  const [word, setWord] = useState()
  const [favoriteWord, setFavoriteWord] = useState()
  const [err, setErr] = useState()

  const { state } = UseAuthContext()
  const user = state.user
  const userId= user && user.user._id
  // console.log(userId)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:3003/get-word/${id}`)
        setWord(res.data)
      } catch (err) {
        setErr(err)
        console.log(err)
      }
    }
    fetch()
  }, [])
  // console.log(word)

  const addToFavorite = async (wordId) => {
    try {
      const word = await axios.get(`http://localhost:3003/get-word/${wordId}`)
      if (word) {
        setFavoriteWord(word)
        // console.log(favoriteWord)
      }
      const user = await axios.post(`http://localhost:3003/user/add-favorite`, { favoriteWord,userId })
      console.log(user.data)
    } catch (err) {
      console.log(err)
    }
  }

  const navigate = useNavigate()
  const viewHistory = () => {
    if (user) {
      navigate(`/history/${userId}`)
    } else {
      navigate('/login')
    }
  }

  const viewFavorite = () => {
    if (user) {
      navigate(`/favorite/${userId}`)
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='h-full relative'>
      <div>
        {word && (
          <div className='relative mx-10 my-10 md:my-28'>
            <div className='bg-secondary-color pb-14 rounded-xl'>
              <div className='bg-white capitalize p-10 rounded-xl text-center'>
                <p className=' text-primary-color font-bold text-4xl'>
                  {word.wordInHausa}
                </p>
                <p className='text-primary-color opacity-50 font-medium mt-3 mb-5'>
                  {word.word} <span>({word.grammar})</span>
                </p>
                <div>
                  {word.explanations.map((e, i) => (
                    <div key={i}>
                    <p>{e}</p>
                    </div>
                  ))}
                </div>
                <p className='opacity-60 italic mt-5'>
                  <span className='block'> misali:</span> {word.example}
                </p>
              </div>
            </div>
            <div className='absolute bottom-0 px-10 py-5 flex justify-between w-full text-primary-color'>
              <button>
                <FaCopy  className="text-xl" />
              </button>
              <button onClick={() => addToFavorite(word._id)}>
                <FaBookmark  className="text-xl"/>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className='absolute bottom-[-1] p-4 bg-secondary-color w-full flex justify-around text-primary-color '>
        <Link to={`/dictionary`} className='flex flex-col items-center'>
          <span className='bg-white  p-2 rounded-full'>
            <FaSearch  />
          </span>
          <span>search</span>
        </Link>
        <button onClick={viewHistory} className='flex flex-col items-center'>
          <span className='bg-white  p-2 rounded-full'>
            <FaHistory />
            </span>
            <span>history</span>
        </button>
        <button onClick={viewFavorite} className='flex flex-col items-center'>
          <span className='bg-white  p-2 rounded-full'>
            <FaStar />
            </span>
          <span>favorite</span>
        </button>
      </div>
    </div>
  )
}
