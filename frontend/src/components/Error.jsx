import {FaCheck, FaExclamation} from 'react-icons/fa'

export default function ErrorMsg({msg}) {
  return (
    <div className='mx-10 my-4 text-red font-bold capitalize flex items-center gap-2'>  <FaExclamation /> {msg}</div>
  )
}
