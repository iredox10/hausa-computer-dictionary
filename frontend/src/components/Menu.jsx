import React, { useState } from "react"
import '../style.css'
import { FaAccessibleIcon, FaArrowCircleLeft, FaArrowLeft, FaBackward, FaHistory, FaHome, FaSignOutAlt, FaStar, FaTimes } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { UseAuthContext } from "../hooks/UseAuthContext"

export default function Menu() {
  const [toggle, setToggle] = useState(false)
  const handleHamburger = (e) => {
    const hamburgerMenu = e.target.firstElementChild
    hamburgerMenu.classList.add('open')
    console.log(hamburgerMenu)
  }
  const { dispatch } = UseAuthContext()
  const navigate = useNavigate()
  const handleLogout = async () => {
    dispatch({ type: 'LOGOUT' })
    localStorage.setItem('user', '')
    navigate('/')
  }
  return (
    <div className='flex justify-between items-center p-4 text-white'>
      {/* <Link to='/dictionary'>
        <FaArrowLeft className='text-4xl bg-secondary-color rounded-full p-2' />
      </Link> */}
      <Link to='/'>
        {/* <FaHome className="text-4xl bg-secondary-color rounded-full p-2" /> */}
        Home
      </Link>
      <div
        className='menu'
        onClick={(e) => {
          setToggle(!toggle)
        }}
      >
        <div className='hamburger-menu'></div>
      </div>
      {toggle && (
        <div className='absolute p-3 h-full w-3/4 bg-primary-color shadow-2xl right-0 top-20 z-10'>
          <div className='flex items-center mb-5 gap-4 capitalize text-2xl hover:bg-secondary-color'>
            <FaStar />
            <p>favorite words</p>
          </div>
          <div className='flex items-center gap-4 capitalize text-2xl hover:bg-secondary-color'>
            <FaHistory />
            <button>favorite words</button>
          </div>
          <div className='flex items-center gap-4 capitalize text-2xl hover:bg-secondary-color'>
            <FaSignOutAlt />
            <button onClick={handleLogout}>log out</button>
          </div>
        </div>
      )}
    </div>
  )
}
