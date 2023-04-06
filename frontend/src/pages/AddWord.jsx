import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorMsg from '../components/Error'
import SubmitBtn from '../components/SubmitBtn'
import SuccessMsg from '../components/SuccessMsg'
import TextInput from '../components/TextInput'
import useFetch from '../hooks/UseFetch'
import Title from './Title'

export default function AddWord() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [word, setWord] = useState("")
    const [wordInHausa, setWordInHausa] = useState("")
    const [grammar, setGrammar] = useState('')
  const [explanations, setExplanations] = useState([])
  const [example, setExample] = useState("")

  const [err, setErr] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const explanation = useRef()

  const { data, err: error } = useFetch("http://localhost:3003/get-topic/" + id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (
        word === "" ||
        wordInHausa === "" ||
        example === "" ||
        grammar === "" ||
        explanations.length === 0
      ) {
        setErr("please fill all the fields")
        return
      }
      const res = await axios.post(`http://localhost:3003/add-word/${id}`, {
        word,
        wordInHausa,
        grammar,
        example,
        explanations,
      })
      setErr("")
      setSuccessMsg("added ")
        navigate(`/manage-words/${id}`)
    } catch (err) {
      setErr(err)
    }
  }

  const addExplanation = () => {
    if (explanation.current.value === "") return
    setExplanations([...explanations, explanation.current.value])
    explanation.current.value = ""
  }

  const removeExplanation = (id) => {
    const newList = explanations
    newList.splice(id, 1)
    setExplanations([...newList])
  }

  return (
    <div>
      <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
        <Title title={`Add word To ${data && data.name}`} />
        <form onSubmit={handleSubmit}>
          {err && <ErrorMsg msg={err} />}
          {successMsg && <SuccessMsg msg={successMsg} />}
          <div>
            <TextInput
              name={"word"}
              type={"text"}
              placeholder='word'
              state={(e) => setWord(e.target.value)}
            />
            <TextInput
              name={"wordInHausa"}
              type={"text"}
              placeholder='word in hausa'
              state={(e) => setWordInHausa(e.target.value)}
            />
            <TextInput
              name={"grammar"}
              type={"text"}
              placeholder='grammar'
              state={(e) => setGrammar(e.target.value)}
            />
            <TextInput
              name={"example"}
              type={"text"}
              placeholder='misali'
              state={(e) => setExample(e.target.value)}
            />
            <div className='px-10 mb-7'>
              <textarea
                name='explanation'
                id='explanation'
                placeholder='rubuta explanation...'
                className='outline-none border-b-2 border-primary-color  w-full capitalize'
                ref={explanation}
              ></textarea>
              <button type='button' onClick={addExplanation}>
                add explanation
              </button>
              <div>
                {explanations &&
                  explanations.map((e, i) => (
                    <div className='flex gap-4' key={i}>
                      <div className='flex gap-4'>
                        <p>{e}</p>
                        <button
                          type='button'
                          onClick={() => removeExplanation(i)}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className='text-center mt-20'>
            <SubmitBtn text='add word' style={"px-10 py-2 text-white"} />
          </div>
        </form>
      </div>
    </div>
  )
}
