import React from "react"
import '../style.css'
import { FaAccessibleIcon, FaArrowCircleLeft, FaArrowLeft, FaBackward, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Menu() {
  const handleHamburger = (e) => {
    const hamburgerMenu = e.target.firstElementChild
    hamburgerMenu.classList.add('open')
    console.log(hamburgerMenu)
  }
  return (
    <div className='flex justify-between items-center p-4 text-white'>
      <Link to='/dictionary'>
        <FaArrowLeft className="text-4xl bg-secondary-color rounded-full p-2" />
      </Link>
      <div className="menu" onClick={(e) =>handleHamburger(e)} >
        <div className="hamburger-menu"
        ></div>
      </div>
    </div>
  )
}
