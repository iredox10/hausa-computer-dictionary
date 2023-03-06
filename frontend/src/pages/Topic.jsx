import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import Menu from '../components/Menu'
import useFetch from '../hooks/UseFetch'
import Title from './Title'

export default function Topic() {
    const { id } = useParams()
    const { data: topic, err } = useFetch(`http://localhost:3003/get-topic/${id}`)
    console.log(topic)
  return (
    <div>
      <Menu />
      {topic && (
        <div className='p-4'>
          <Title title={topic.name} color={'text-white text-2xl'} />
          <Title title={topic.desc} color={'text-white'} />
          <div className='grid grid-cols-2 gap-10 justify-between mt-10'>
                      <Link className='bg-secondary-color px-4 py-2 capitalize font-bold text-primary-color' to={`/manage-words/${topic._id}`}>manage words</Link>
                      <Link className='bg-secondary-color px-4 py-2 capitalize font-bold text-primary-color' to={`/manage-terms/${topic._id}`}>manage terms</Link>
                      
                  </div>
        </div>
      )}
    </div>
  )
}
