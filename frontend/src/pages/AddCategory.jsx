import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import ErrorMsg from "../components/Error"
import SubmitBtn from "../components/SubmitBtn"
import SuccessMsg from "../components/SuccessMsg"
import TextInput from "../components/TextInput"
import Title from "./Title"

export default function AddCategory() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [err, setErr] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (name === "" && desc === "") {
        setErr("please fill all the fields")
        return
      }
      const res = await axios.post("http://localhost:3003/add-category", {
        name,
        desc,
      })
      console.log(res.status)
      setErr('')
      setSuccessMsg('added ')
      setTimeout(() => {
        navigate("/admin")
      },3000)
    } catch (err) {
      setErr(err.response.data)
    }
  }
  return (
    <div>
      <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
        <Title title={"Add Category"} />
        <form onSubmit={handleSubmit}>
          {err && <ErrorMsg msg={err} />}
          {successMsg && <SuccessMsg msg={successMsg} />}
          <div>
            <TextInput name={"name"} type={"text"} placeholder='name' state={(e) => setName(e.target.value)}/>
            <div className='px-10 mb-7'>
              <textarea
                name='desc'
                id='desc'
                placeholder='description...'
                className='outline-none border-b-2 border-primary-color  w-full capitalize'
                onChange={(e )=> setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className='text-center mt-20'>
            <SubmitBtn
              text='add category'
              style={"px-10 py-2 text-white"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
