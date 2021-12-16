import React from 'react'

const moods = ["😃", "😠", "😦", "🙄", "😆"];

const todos = ["Go to Shopping", "Buy Vegetables", "Watch Movies"];


function getMood() {
    
    return moods[Math.floor(Math.random() * moods.length)];
}

const First = () => {

    const todoList = todos.map((item) => {
        return <li>{item}</li>
    });

   

    const randomNum = Math.floor(Math.random() * 10) + 1;
    // const magicNum = 7;
    // let show = null;
    // if (randomNum === magicNum) {
    //     show=<img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" />
    // } else {
    //     show=<p>Not a Magic Number</p>
    // }

    return (
        <div>
            <h2>{randomNum}</h2>
            <h2>My Mood is : {getMood()}</h2>
            <ul>
                {todoList}
            </ul>

            {/* {randomNum===7 ?<img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" /> : <p>Not a Magic Number</p>} */}
            {randomNum===7  && <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344" />}
        </div>
    )
}

export default First
