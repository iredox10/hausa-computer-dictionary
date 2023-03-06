import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Menu from "../components/Menu"

export default function Word() {
  const { id } = useParams()
  const [word, setWord] = useState()
  const [err, setErr] = useState()
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:3003/word/${id}`)
        setWord(res.data)
      } catch (err) {
        setErr(err)
        console.log(err)
      }
    }
    fetch()
  }, [])
  console.log(word)
  return (
    <div className='h-full relative'>
      <Menu />
      <div>
        {word && (
          <div className='relative m-10'>
            <div className='bg-secondary-color pb-14 rounded-xl'>
              <div className='bg-white capitalize p-10 rounded-xl text-center'>
                <p className=' text-primary-color font-bold text-4xl'>
                  {word.wordInHausa}
                </p>
                <p className='text-primary-color opacity-50 font-medium mt-3 mb-5'>
                  {word.word} <span>({word.grammar})</span>
                </p>
                <p>
                  {word.explanations.map((e) => (
                    <p>{e}</p>
                  ))}
                </p>
                <p className='opacity-60 italic mt-5'>
                  <span className='block'> misali:</span> {word.example}
                </p>
              </div>
            </div>
            <div className='absolute bottom-0 px-10 py-2 flex justify-between w-full'>
              <button>link</button>
              <button>link</button>
            </div>
          </div>
        )}
      </div>
      <div className='absolute bottom-0 p-4 bg-secondary-color w-full flex justify-around '>
        <button>link1</button>
        <button>link2</button>
        <button>link3</button>
      </div>
    </div>
  )
}
