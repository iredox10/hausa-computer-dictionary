import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card'
import Menu from '../components/Menu'
import useFetch from '../hooks/useFetch'
import Title from './Title'
import { path } from '../utils/path'

export default function Topic() {
    const { id } = useParams()
    const { data: topic, err } = useFetch(`${path}/get-topic/${id}`)
  return (
    <div>
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
