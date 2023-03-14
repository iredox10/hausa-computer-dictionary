import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import useFetch from '../hooks/useFetch'
import Title from './Title'
export default function Favorite() {
    const { id } = useParams()
    const { data, err } = useFetch(`http://localhost:3003/user/view-favorite/${id}`)
    const favorites = data && data.favorite
    console.log(favorites)
  return (
      <div>
          <Title title={`favoite words`} />
          {favorites && favorites.map((favorite,i) => (
              <div key={i} className='bg-secondary-color mb-3'>
              <Link to={`/word/${history._id}`}>
                  
                  <p><span>word in englis: </span>{favorite.word}</p>
                      <p><span>word in hausa: </span>{favorite.wordInHausa}</p>
                      </Link>
              </div>
          ))}
      </div>
  )
}
