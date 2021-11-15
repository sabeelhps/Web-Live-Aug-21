const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log('My First Middleware');
    // ....code to get executed
    req.username = 'Sabeel';
    next();

    console.log('First Middleware after calling next()');

});


app.use((req, res, next) => {
    console.log('My Second Middleware');
    // res.send('HIJACKED BY MY SECOND MIDDLEWARE');
    next();
})


const verify = (req, res, next) => {
    const { password } = req.query
    
    if (password !== 'orange') {
        return res.send('Invalid Password');
    }
    
    next();
}


app.get('/',(req,res)=>{

    res.send('Home Route');
});


app.get('/cat',verify,(req, res) => {

    const { username } = req;

    console.log(username);

    res.send('Meeooww');
});


app.get('/secret',verify,(req, res) => {
    
    res.send('My Secret is : Sometime i wear the headphones so that i dont have to talk in public');
})





app.listen(2323, () => {
    console.log('server running at port 2323');
})