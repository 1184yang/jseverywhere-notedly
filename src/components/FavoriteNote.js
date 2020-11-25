import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import ButtonAsLink from './ButtonAsLink'
import { TOGGLE_FAVORITE } from '../graphql/mutation'
import { GET_MY_FAVORITES } from '../graphql/query'

const FavoriteNote = ({ me, noteId, favoriteCount }) => {
  const [count, setCount] = useState(favoriteCount)
  const [favorited, setFavorited] = useState(
    me.favorites.filter(note => note.id === noteId).length > 0
  );
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: { id: noteId },
    refetchQueries: [{ query: GET_MY_FAVORITES }]
  });

  return (
    <React.Fragment>
      {favorited ? (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite()
            setFavorited(false)
            setCount(count - 1)
          }}
        >
          Remove Favorite
        </ButtonAsLink>
      ) : (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite()
            setFavorited(true)
            setCount(count + 1)
          }}
        >
          Add Favorite
        </ButtonAsLink>
      )}
      : {count}
    </React.Fragment>
  )
}

export default FavoriteNote