import React from 'react'
import { useMutation } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import ButtonAsLink from './ButtonAsLink'
import { DELETE_NOTE } from '../graphql/mutation'
import { GET_MY_NOTES, GET_NOTES } from '../graphql/query'

const DeleteNote = ({ noteId, history }) => {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id: noteId },
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES}],
    onCompleted: (data) => {
      history.push('/mynotes')
    }
  })
  return (
    <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>
  )
}

export default withRouter(DeleteNote)