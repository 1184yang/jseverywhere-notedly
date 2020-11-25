import React, { useEffect } from 'react'
import { useMutation, gql } from '@apollo/client'
import NoteForm from '../components/NoteForm'
import { NEW_NOTE } from '../graphql/mutation'
import { GET_MY_NOTES, GET_NOTES } from '../graphql/query'

const NewNote = ({ history }) => {
  useEffect(() => {
    document.title = "New Note - Notedly"
  })

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES}],
    onCompleted: (data) => {
      history.push(`note/${data.newNote.id}`);
    }
  })

  return (
    <React.Fragment>
      <NoteForm action={data} />
    </React.Fragment>
  )
}

export default NewNote