import React from 'react'
import './App.css';
import GithubUser from './Components/GithubUser'

const App = () => {
  return (
    <div className="App">
      <h1>Github App</h1>
      <GithubUser username="sabeelhps" />
      <GithubUser username="facebook" />
      <GithubUser username="alok92iit" />
    </div>
  )
}

export default App
