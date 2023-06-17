import React from 'react'

export default function Title({title,color}) {
  return (
      <div>
      <h1 className={`text-center text-2xl capitalize font-bold ${color}`}>{ title}</h1>
    </div>
  )
}
