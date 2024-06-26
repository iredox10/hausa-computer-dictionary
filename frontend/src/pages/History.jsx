import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import useFetch from '../hooks/useFetch'
import Title from './Title'
import { path } from '../utils/path'

export default function History() {
  const { id } = useParams()
  const { data, err } = useFetch(
    `${path}/user/view-favorite/${id}`
  )
  const histories = data && data.history
  return (
    <div>
      <Title color={`text-white`} title={`history`} />
      <div className='p-5'>
        {histories &&
          histories.map((history, i) => (
            <div key={i} className='p-2 bg-secondary-color mb-3'>
              <Link to={`/word/${history._id}`}>
              <p>
                  <span>word in englis: </span>
                {history.word}
              </p>
              <p>
                <span>word in hausa: </span>
                {history.wordInHausa}
              </p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
