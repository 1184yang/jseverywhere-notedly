import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import NoteFeed from '../components/NoteFeed'
import { GET_MY_FAVORITES } from '../graphql/query'

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites - Notedly'
  })

  const { loading, error, data } = useQuery(GET_MY_FAVORITES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{`Error! ${error.message}`}</p>

  return (
    <React.Fragment>
      {data.me.favorites.length !== 0 ? (
        <NoteFeed notes={data.me.favorites} />
        ) : (<p>No favorites yet</p>)
      }
    </React.Fragment>
  )
}

export default Favorites