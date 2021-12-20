import React,{useState} from 'react'
import './Person.css';

const Person = (props) => {

    const [name,setName]=useState(props.name)

    const nameChangeHandler = () => {
        setName('Anonymous');
    }



    return (
        <div onClick={nameChangeHandler} className="person">
            <h2>Name : {name}</h2>
            <p>Age :{ props.age}</p>
            <p>FavColor : { props.favColor}</p>
        </div>
    )
}

export default Person
