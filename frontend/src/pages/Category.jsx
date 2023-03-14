import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import Menu from "../components/Menu"
import Model from "../components/Model"
import useFetch from "../hooks/UseFetch"
import UseFetch from "../hooks/UseFetch"

export default function Category() {

  const { id } = useParams()
  const [topicId, setTopicId] = useState('')
  const [err, setErr] = useState()

  const [showModel, setshowModel] = useState(false)

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:3003/get-category/${id}`)
  //       setCategory(res.data)
  //       console.log(data)
  //     } catch (err) {
  //       setErr(err)
  //       // console.log(err)
  //     }
  //   }
  //   fetch()
  // }, [])


  const {data:category,err:error} = useFetch(`http://localhost:3003/get-category/${id}`)
  console.log(category && category)

  const handleShowModel = () => {
    if (topicId === "") return
    console.log(topicId)
    setshowModel(true)
  }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3003/delete-topic/${topicId}`
      )
      console.log(res.data)
      setshowModel(false)
    } catch (err) {
      console.log(err)
      setErr(err)
    }
  }

  const handleCancel = () => {
    setshowModel(false)
  }
  return (
    <div className='text-white'>
      {category && (
        <div>
          <div className='text-center'>
            <h1 className='font-bold uppercase text-4xl '>{category.name}</h1>
            <p className='capitalize'>{category.desc}</p>
          </div>
          <div>
            <div>
              <Button
                link={`/add-topic/${category._id}`}
                text={"add-topic"}
                style='bg-white text-primary-color px-4 py-1'
              />
            </div>
            <div>
              {category.topics.length === 0 ? (
                <div> no topics added yet</div>
              ) : (
                category.topics
                  .map((t) => t)
                  .map((topic) => (
                    <div className='mx-4'>
                      <div className='bg-secondary-color  mb-3 p-2'>
                        <div>
                          <p>{topic.name}</p>
                          <p>{topic.desc}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <Button
                            text={`manage ${topic.name}`}
                            link={`/manage-topic/${topic._id}`}
                            style={`px-4 py-1 block`}
                          />
                          <button
                            onClick={() => {
                              setTopicId(topic._id)
                              handleShowModel()
                          }}
                          >delete</button>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      )}
      {showModel && <Model remove={handleDelete} cancel={handleCancel} />}
    </div>
  )
}
