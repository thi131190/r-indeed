import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/')
  }
  const email = useSelector(state => state.email)
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/homepage' className='nav-link'>
            Home
          </Link>
          <Link to='/candidates' className='nav-link'>
            Candidates
          </Link>
          <Link to='/company' className='nav-link'>
            Company
          </Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success' className='mr-sm-2'>
            Search
          </Button>
          <Button
            style={{ display: email === '' && 'none' }}
            variant='outline-danger'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
