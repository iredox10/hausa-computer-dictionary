import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import ErrorMsg from "../components/Error"
import TextInput from "../components/TextInput"
import Title from "./Title"
import { UseAuthContext } from "../hooks/UseAuthContext"
import { path } from "../utils/path"

export default function Register() {
  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState()

  const { dispatch } = UseAuthContext()


  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      username === "" ||
      fullname === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("please fill all the fields")
      return
    }
    else if(password !== confirmPassword) {
      setError('password did not match')
      console.log(error)
      return
    }
    setError('')
    try {
      const res = await axios.post(`${path}/user/register`, {
      // const res = await axios.post("http://localhost:3003/user/register", {
        fullname,
        username,
        password,
      })
      const data = res.data
      dispatch({ type: "LOGIN", payload: data })
      localStorage.setItem("user", JSON.stringify(data))
      navigate('/')
    } catch (error) {
      setError(error)
    }
  }
  return (
    <div>
      {username}
      <div>
        <h1></h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
          <Title title={"Rijista"} />
          {error && <ErrorMsg msg={error} />}
          <div className="mt-5">
            <TextInput
              name={"suna"}
              type={"text"}
              placeholder='cikakken suna'
              state={(e) => setFullname(e.target.value)}
            />
            <TextInput
              name={"suna"}
              type={"text"}
              placeholder='username'
              state={(e) => setUsername(e.target.value)}
            />
            <TextInput
              name={"password"}
              type={"password"}
              placeholder='zabi password'
              state={(e) => setPassword(e.target.value)}
            />
            <TextInput
              name={"confirmPassword"}
              type={"password"}
              placeholder='maimaita password'
              state={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='text-center mt-10 capitalize' >
            <button type="submit" className="capitalize text-xl bg-primary-color text-white py-1 px-4 rounded-lg">rejista</button>
            <p className='mt-4'>
              kana da account?{" "}
              <Link to={"/login"} className='underline text-primary-color'>
              <span className="hover:bg-primary-color hover:text-white p-1"> login </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
