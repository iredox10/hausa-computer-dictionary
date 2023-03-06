import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Main({ data }) {
  const {id} = useParams()
  console.log(id)
  return (
    <Link to={`category/${data._id}`}>
    <div className='bg-primary-color text-white p-3 flex justify-between '>
      <div>pic</div>
              <div>
        <h1 className='uppercase'>{ data.category}</h1>
        <h1>{ data.category}</h1>
                  <p>{data.desc}</p>
              </div>
      </div>
      </Link>
  )
}
