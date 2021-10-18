const express = require('express');
const app = express();
const path = require('path');



app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

const todos = ["Go To Gym", 'Buy Groceries', 'Learn React','Watch Web Series'];


app.get('/', (req, res) => {

    res.render('index');
});


app.get('/random', (req, res) => {
    
    const randomNum = Math.floor(Math.random() * 100)

    res.render('random', { randomNum });
});

app.get('/todos', (req, res) => {
    

    res.render('todos',{todos})
})


app.listen(8000, () => {
    console.log('server running at port 8000');
})