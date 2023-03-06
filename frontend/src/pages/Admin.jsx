import axios from "axios"
import React, { useEffect, useMemo, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import CardTitle from "../components/CardTitle"
import Header from "../components/Header"
import Model from "../components/Model"
import SubmitBtn from "../components/SubmitBtn"
import Title from "./Title"

export default function Admin() {

  const navigate = useNavigate()

  const [categories, setCategories] = useState()
  const [err, setErr] = useState()
  const [showModel, setshowModel] = useState(false)
  const [categoryId, setCategoryId] = useState()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:3003/categories")
        setCategories(res.data)
      } catch (err) {
        setErr(err)
      }
    }
    fetch()
  }, [])
  useMemo(() => {const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:3003/get-categories")
      setCategories(res.data)
    } catch (err) {
      setErr(err)
    }
  }
  fetch()
  },[categories])
  

  const handleShowModel = () => {
    if(categoryId === '') return 
    setshowModel(true)
  }

  const handleDelete = async ()  => {
    try {
      const res = await axios.delete(
        `http://localhost:3003/delete-category/${categoryId}`
      )
      setshowModel(false)
    } catch (err) {
      setErr(err)
    }
  }

  const handleCancel = () => {
    setshowModel(false)
  }

  return (
    <div>
      <Header />
      <div className=''>
        <Title title={"Categories"} color='text-white' />
        <div className='flex justify-end p-4'>
          <Button
            link={"/add-category"}
            text={"add-category"}
            style='bg-white text-pimary-color px-4 py-1'
          />
        </div>
      </div>
      <div className='mx-4 grid grid-cols-2 gap-8'>
        {categories &&
          categories.map((category) => (
              <div key={category._id} className='bg-secondary-color p-2'>
                <CardTitle title={category.name} />
                <p>{category.desc}</p>
              <div className='flex items-center justify-between gap-3 mt-4'>
                <button onClick={() => { 
                  setCategoryId(category._id)
                  handleShowModel()
                }
                } className='capitalize bg-white px-5 py-1'>delete</button>
                  <Button
                    link={`/category/${category._id}`}
                    text={"manage"}
                    style={"text-white px-5 py-1 block"}
                  />
                </div>
              </div>
          ))}
        {showModel && <Model remove={handleDelete} cancel={ handleCancel} />}
      </div>
    </div>
  )
}
