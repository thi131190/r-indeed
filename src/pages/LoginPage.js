import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function LoginPage () {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'LOGIN', payload: { email, password } })
    history.push('/homepage')
  }

  return (
    <Container
      className='d-flex justify-content-center '
      style={{ height: '100vh' }}
    >
      <Form style={{ width: 400, marginTop: 100 }} onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </Form.Group>

        <Button className='btn-block' variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </Container>
  )
}
