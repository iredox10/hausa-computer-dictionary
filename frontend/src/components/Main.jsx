import React from "react"
import { FaLaptop } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"

export default function Main({ data }) {
  // const {id} = useParams()
  // console.log(id)
  return (
    <Link to={`user-category/${data._id}`}>
      <div className='bg-primary-color text-white p-3 flex items-center justify-between gap-5 '>
        <div><FaLaptop className="text-4xl"/></div>
        <div className="">
          <h1 className='uppercase'>{data.name}</h1>
          <h1>{data.category}</h1>
          <p>{data.desc}</p>
        </div>
      </div>
    </Link>
  )
}
