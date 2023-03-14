import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Menu from '../components/Menu'
import Search from '../components/Search'
import useFetch from '../hooks/UseFetch'
import Word from './Words'

export default function ManageTerms() {
    const { id } = useParams()
        const { data, err } = useFetch(
          `http://localhost:3003/get-topic/${id}`
        )
        console.log(data)
  return (
    <div>
      <Search placeholder={"duba kalma"} />
          <div>{data && data.terms.map(term => term).map(t => {
              {t}
          })}</div>
          <Button
              link={`/add-term/${data && data._id}`}
              text={'add term'}
              style={'p-2 bg-white'}
          />
    </div>
  )
}
