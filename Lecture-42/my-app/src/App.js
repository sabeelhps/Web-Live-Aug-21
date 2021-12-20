import React from 'react'
import Person from './Components/Person'


const App = () => {
  return (
    <div>
        <Person name="Kartik" age="24" favColor="lightgreen"/>
        <Person name="Vivek" age="23" favColor="purple"/>
        <Person name="Anurag" age="22" favColor="blue"/>
        <Person name="Alok" age="21" favColor="lightgray"/>
    </div>
  )
}

export default App
