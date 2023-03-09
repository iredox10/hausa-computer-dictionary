import React from 'react'

export default function SubmitBtn({style,text,onclick}) {
  return (
    <button
      onClick={onclick}
      className={`bg-primary-color rounded-full capitalize hover:shadow-xl ${style}`}
    >
      {text}
    </button>
  )
}
