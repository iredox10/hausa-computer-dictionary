import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorMsg from '../components/Error'
import SubmitBtn from '../components/SubmitBtn'
import SuccessMsg from '../components/SuccessMsg'
import TextInput from '../components/TextInput'
import useFetch from '../hooks/UseFetch'

import Title from './Title'

export default function AddTopic() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [err, setErr] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const { data, err: error } = useFetch('http://localhost:3003/get-category/' + id)


    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        if (name === "" && desc === "") {
          setErr("please fill all the fields")
          return
        }
        const res = await axios.post(`http://localhost:3003/add-topic/${id}`, {
          name,
          desc,
        })
        console.log(res.data)
        setErr("")
        setSuccessMsg("added ")
          navigate(`/category/${id}`)
      } catch (err) {
        setErr(err)
      }
    }

  return (
    <div>
      <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
        <Title title={`Add Topic To ${data && data.name}`} color={'mb-10'} />
        <form onSubmit={handleSubmit}>
          {err && <ErrorMsg msg={err} />}
          {successMsg && <SuccessMsg msg={successMsg} />}
          <div>
            <TextInput
              name={"name"}
              type={"text"}
              placeholder='name'
              state={(e) => setName(e.target.value)}
            />
            <div className='px-10 mb-7'>
              <textarea
                name='desc'
                id='desc'
                placeholder='description...'
                className='outline-none border-b-2 border-primary-color  w-full capitalize'
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='text-center mt-20'>
            <SubmitBtn text='add topic' style={"px-10 py-2 text-white"} />
          </div>
        </form>
      </div>
    </div>
  )
}
