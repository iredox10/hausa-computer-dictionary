import axios from "axios"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { FaPlus } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import CardTitle from "../components/CardTitle"
import Header from "../components/Header"
import Model from "../components/Model"
import SubmitBtn from "../components/SubmitBtn"
import Title from "./Title"
import { UseAuthContext } from "../hooks/UseAuthContext"

export default function Admin() {
  const navigate = useNavigate()

  const [categories, setCategories] = useState()
  const [err, setErr] = useState()
  const [showModel, setshowModel] = useState(false)
  const [categoryId, setCategoryId] = useState()
  const { state } = UseAuthContext()
  const token = state.user && state.user.jwt
  console.log(state.user, token)
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:3003/get-categories", {
          headers: { Authorization: `Bearer ${token}` },
        })
        setCategories(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
        setErr(err)
      }
    }
    fetch()
  }, [])

  // useCallback(() => {
  //   const fetch = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3003/get-categories")
  //     const data = res.data
  //     setCategories(data)
  //     console.log(categories)
  //   } catch (err) {
  //     setErr(err)
  //   }
  // }
  // fetch()
  // },[categories])

  const handleShowModel = () => {
    if (categoryId === "") return
    setshowModel(true)
  }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3003/delete-category/${categoryId}`
      )
      const ress = await axios.get("http://localhost:3003/get-categories")
      const data = ress.data
      setCategories(data)
      console.log(categories)
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
      <div className=''>
        <Title title={"Categories"} color='text-white' />
        <div className='flex justify-end p-4'></div>
      </div>
      <div className='mx-4 grid grid-cols-2 gap-8'>
        {categories &&
          categories.map((category) => (
            <div key={category._id} className='bg-secondary-color p-2'>
              <CardTitle title={category.name} />
              <p>{category.desc}</p>
              <div className='flex items-center justify-between gap-3 mt-4'>
                <button
                  onClick={() => {
                    setCategoryId(category._id)
                    handleShowModel()
                  }}
                  className='capitalize bg-white px-5 py-1'
                >
                  delete
                </button>
                <Button
                  link={`/category/${category._id}`}
                  text={"manage"}
                  style={"text-white px-5 py-1 block"}
                />
              </div>
            </div>
          ))}
        <Link
          to={`/add-category`}
          className='absolute right-4 bottom-5 p-2 text-primary-color bg-white text-2xl rounded-full hover:bg-primary-color hover:text-white hover:drop-shadow-xl'
        >
          <FaPlus className='' />
        </Link>
        {showModel && <Model remove={handleDelete} cancel={handleCancel} />}
      </div>
    </div>
  )
}
