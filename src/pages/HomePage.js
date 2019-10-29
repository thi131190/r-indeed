import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const history = useHistory()
  const email = useSelector(state => state.email)
  email === '' && history.push('/')
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <h1>
        Welcome {email}!!!
      </h1>
    </div>
  )
}

export default HomePage
