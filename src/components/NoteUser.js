import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { GET_ME } from '../graphql/query'
import DeleteNote from './DeleteNote'
import FavoriteNote from './FavoriteNote'

const NoteUser = ({ note }) => {
  const { loading ,error, data } = useQuery(GET_ME)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <React.Fragment>
      <FavoriteNote 
        me={data.me}
        noteId={note.id}
        favoriteCount={note.favoriteCount}
      />
      <br />
      {data.me.id === note.author.id && (
        <React.Fragment>
          <Link to={`/edit/${note.id}`}>Edit</Link> <br />
          <DeleteNote noteId={note.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default NoteUser