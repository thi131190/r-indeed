import React, { useState, useEffect } from 'react'
import { Form, Col, InputGroup, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const EditCandidatePage = props => {
  const [validated, setValidated] = useState(false)
  const [candidate, setCandidate] = useState(null)
  const { id } = useParams()

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    const url = `http://localhost:3001/candidates/${id}`
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(candidate),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      console.log('Success:', JSON.stringify(json))
      props.history.push('/candidates')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const getCandidate = async () => {
    const response = await fetch(`http://localhost:3001/candidates/${id}`)
    const data = await response.json()
    setCandidate(data)
  }
  useEffect(() => {
    getCandidate()
  }, [])

  console.log(candidate)

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md='4' controlId='validationFirstName'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='First name'
            value={candidate.first_name}
            onChange={e =>
              setCandidate({ ...candidate, first_name: e.target.value })}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='validationLastName'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Last name'
            value={candidate && candidate.last_name}
            onChange={e =>
              setCandidate({ ...candidate, last_name: e.target.value })}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='validationEmail'>
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type='email'
              placeholder='Email'
              aria-describedby='inputGroupPrepend'
              value={candidate && candidate.email}
              onChange={e =>
                setCandidate({ ...candidate, email: e.target.value })}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please choose a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Button type='submit'>Submit form</Button>
    </Form>
  )
}

export default EditCandidatePage
