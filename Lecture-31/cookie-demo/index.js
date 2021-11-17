const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')


app.use(cookieParser('thisisnotagoodsecret'));

app.get('/', (req, res) => {
    
    // console.log(req.cookies);
    
    res.send(req.signedCookies);
});





app.get('/setcookie', (req, res) => {

    res.cookie('mode', 'dark');
    res.cookie('location', 'New Delhi');
    res.cookie('username', 'Sabeel');
    res.send('SENT U A COOKIE SUCCESSFULLY!');
});

app.get('/greet', (req, res) => {

    const { username } = req.cookies;

    res.send(`Hey there ${username}!!`);
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'orange', { signed: true });

    res.send('SENT YOU A SIGNED COOKIEEE!!!');
});



app.listen(3000,()=>{
  console.log('server started at port 3000');
});