const express = require('express');
const app = express();
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.get('/viewcount', (req, res) => {
    
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }

    res.send(`YOU VISITED THIS PAGE ${req.session.count} times`);
});


app.get('/setname', (req, res) => {
    
    req.session.username = 'Sabeel';

    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    
    const { username } = req.session;


    res.send(`Hello From ${username}`);
});



app.get('/',(req,res)=>{

    res.send('Hey There!');
})




app.listen(3000,()=>{
  console.log('server started at port 3000');
});