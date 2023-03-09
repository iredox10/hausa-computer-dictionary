import { Link } from "react-router-dom"
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import Title from "./Title"

function Login() {
return (
  <div>
    <div>
      <h1></h1>
    </div>
    <div className='bg-white min-h-screen rounded-tl-[30%] p-10'>
      
      <div className='mb-20'>
        <Title title={"login"} />
      </div>
      <div>
        <TextInput name={"username"} type={"text"} placeholder='username' />
        <TextInput name={"password"} type={"password"} placeholder='password' />
      </div>
      <div className='text-center mt-20'>
        <Button link={"/register"} text={"regista"} style='px-24 py-2' />
        <p className='mt-4'>
          baka da account?
          <Link to={"/rijista"} className='underline text-primary-color capitalize'>
            rijista
          </Link>
        </p>
      </div>
    </div>
  </div>
)
}

export default Login