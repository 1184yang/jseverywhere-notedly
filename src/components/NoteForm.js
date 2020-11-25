import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const NoteForm = ({ action, content }) => {
  const [value, setValue] = useState({ content: content || '' })

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    action({
      variables: { ...value }
    })
  }

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <TextArea 
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  )
}

export default NoteForm