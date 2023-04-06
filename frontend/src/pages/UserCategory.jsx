import React from "react"
import { Link, useParams } from "react-router-dom"
import Button from "../components/Button"
import CardTitle from "../components/CardTitle"
import useFetch from "../hooks/UseFetch"
import Title from "./Title"

export default function UserCategory() {
  const { id } = useParams()
  const { data: category, err } = useFetch(
    `http://localhost:3003/get-category/${id}`
  )
  console.log(category)
  return (
    <div>
      <div className=''>
        <Title
          title={`${category && category.name} topics`}
          color='text-white'
        />
      </div>
      <div className='m-4 grid grid-cols-2 gap-8'>
        {category &&
          category.topics.map((topic) => (
            <Link to={`/user-topic/${topic._id}`}>
              <div key={topic._id} className='bg-secondary-color p-2 '>
                <CardTitle title={`kalmomin: ${topic.name}`} />
                <p>{topic.desc}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
