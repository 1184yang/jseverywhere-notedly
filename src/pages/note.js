import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Note from '../components/Note'
import { GET_NOTE } from '../graphql/query'

const NotePage = () => {
  const { id } = useParams(); 
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id }});

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! Note not found</p>

  return (
    <div>
      <Note note={data.note} />
    </div>
  )
}

export default NotePage