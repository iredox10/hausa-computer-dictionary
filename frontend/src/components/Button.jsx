import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ link, text, style}) {
    return (
        <Link to={link} className={`bg-primary-color rounded-full capitalize hover:shadow-xl ${style}`}>
            {text}
        </Link>
  )
}
