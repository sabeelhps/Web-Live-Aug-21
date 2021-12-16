import React from 'react'
import './Person.css';

const Person = (props) => {

    return (
        <article className="person">
            <h2>Name : {props.name} </h2>
            <p>Age : {props.age }</p>
            <p>FavColor : { props.favColor}</p>
        </article>
    )
}

export default Person
