import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CandidatesPage from './pages/CandidatesPage'
import CompanyPage from './pages/CompanyPage'

function App () {
  return (
    <div className='App'>
      APP
      <Route path='/' exact component={HomePage} />
      <Route path='/candidates' exact component={CandidatesPage} />
      <Route path='/company' exact component={CompanyPage} />
    </div>
  )
}

export default App
