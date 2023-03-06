import React from 'react'

export default function CardTitle({title,style}) {
  return (
      <h1 className={`capitalize font-bold text-2xl text-primary-color ${style}`}>{ title}</h1>
  )
}
