import React from 'react'
import './Person.css';

const Person = ({name,age,favColor}) => {

    return (
        <article className="person">
            <h2>Name : {name} </h2>
            <p>Age : {age }</p>
            <p>FavColor : {favColor}</p>
        </article>
    )
}

export default Person
