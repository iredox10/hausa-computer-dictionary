import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import useFetch from '../hooks/useFetch'
import Title from './Title'
import { path } from '../utils/path'
export default function Favorite() {
    const { id } = useParams()
    const { data, err } = useFetch(`${path}/user/view-favorite/${id}`)
    const favorites = data && data.favorite
    console.log(favorites)
  return (
      <div>
          <Title title={`favorite words`}  color={`text-white`}/>
          {favorites && favorites.map((favorite,i) => (
              <div key={i} className='bg-secondary-color mb-3'>
              <Link to={`/word/${favorite._id}`}>
                  
                  <p><span>word in englis: </span>{favorite.word}</p>
                      <p><span>word in hausa: </span>{favorite.wordInHausa}</p>
                      </Link>
              </div>
          ))}
      </div>
  )
}
