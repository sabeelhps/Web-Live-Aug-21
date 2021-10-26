const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse the data sent by the form
app.use(express.urlencoded({ extended: true }));

// Middleware used to parse the json data populate the req.body
app.use(express.json());

app.get('/', (req, res) => {
    
    res.render('index');
})


app.get('/user', (req, res) => {

    console.log(req.query);
    res.send('GET REQUEST');
});

app.post('/user', (req, res) => {
    
    console.log(req.body);

    res.send('POST REQUEST');
})


app.listen(3000, () => {
    console.log('server running at port 3000');
})