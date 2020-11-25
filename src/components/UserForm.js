import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
label,
input {
  display: block;
  line-height: 2em;
}

input {
  width: 100%;
  margin-bottom: 2em;
}
`;

const UserForm = ({ formType = 'signin', action }) => {
  const [values, setValues] = useState()

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    action({
      variables: {
        ...values
      }
    })
  }

  return (
    <Wrapper>
      {formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
      <Form onSubmit={onSubmit}>
        {formType === 'signup' && (
          <React.Fragment>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={onChange}
            />
          </React.Fragment>
        )}
        <label htmlFor="email">Email:</label>
        <input 
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input 
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  )
}

export default UserForm