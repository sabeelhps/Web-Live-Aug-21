const express = require('express');
const app = express();

// app.use((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // console.log('YOU MADE A REQUEST');


//     // res.send('YOU MADE A REQUEST SUCCESSFULLY.AND THIS IS THE CORRESPONDING RESPONSE!!!!');
//     res.send('<h1>This is html Heading Tag as a Response</h1>')
// })


// ROUTING ----------------------




app.get('/', (req, res) => {
    res.send('HOME ROUTE');
})


app.get('/cat', (req, res) => {
    
    res.send('<h1>Meeoowwwww</h1>');
})

app.get('/dog', (req, res) => {
    
    res.send('<h1>Wooof Wooof</h1>')
});

app.get('/user', (req, res) => {
    res.send('<h1>Hello from The Server</h1>')
})



app.get('*', (req, res) => {
    
    res.send('YOU ARE REQUESTING THE WRONG URL!!!');
})




app.listen(3000, () => {
    console.log('server running at port 3000');
})