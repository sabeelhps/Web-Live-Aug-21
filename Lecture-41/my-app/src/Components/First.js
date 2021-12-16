import React from 'react'

const moods = ["😃", "😠", "😦", "🙄", "😆"];

const todos = ["Go to Shopping", "Buy Vegetables", "Watch Movies"];


function getMood() {
    
    return moods[Math.floor(Math.random() * moods.length)];
}

const First = () => {


    return (
        <div>
            <h2>{Math.floor(Math.random() * 10) + 1}</h2>
            <h2>My Mood is : {getMood()}</h2>
            <ul>
                {todos.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default First
