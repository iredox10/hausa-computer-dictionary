import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import ErrorMsg from "../components/Error"
import TextInput from "../components/TextInput"
import { UseAuthContext } from "../hooks/UseAuthContext"
import Title from "./Title"

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()

  const { dispatch } = UseAuthContext()
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username === '' || password === '') {
      setError('fields can\'t be blank')
      return
    }
    try {
      const res = await axios.post('http://localhost:3003/user/login', { username, password })
      const data = res.data
      const isAdmin = res.data.user.isAdmin
      dispatch({ type: 'LOGIN', payload: data })
      localStorage.setItem('user', JSON.stringify(data))
      if (!isAdmin) {
        navigate('/dictionary')
      } else {
        navigate('/admin')
      }
      setError('')
    } catch (err) {
      console.log(err.response.data)
      setError(err.response.data)
    }
  }
return (
  <div>
    <div>
    </div>
    <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
      <div className='mb-20'>
        <Title title={"login"} />
      </div>
      <form onSubmit={handleSubmit}>
        <ErrorMsg msg={error} />
        <div>
          <TextInput name={"username"} type={"text"} placeholder='username'  state={(e) => setUsername(e.target.value)}/>
          <TextInput
            name={"password"}
            type={"password"}
            placeholder='password'
            state={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='text-center mt-20'>
          <button type="submit">login</button>
        </div>
            </form>
          <p className='mt-4 text-center'>
            baka da account?
            <Link
              to={"/rijista"}
              className='underline text-primary-color capitalize'
            >
              rijista
            </Link>
          </p>
    </div>
  </div>
)
}

export default Login