import React from 'react'

export default function Title({title,color}) {
  return (
      <div>
      <h1 className={`text-center capitalize font-bold ${color}`}>{ title}</h1>
    </div>
  )
}
