const express = require('express');
const app = express();



app.get('/', (req, res) => {
    

    res.send('ROOT PATH');
});

app.get('/r/:subredit', (req, res) => {
    
    const { subredit } = req.params;

    res.send(`<h1>THIS IS ${subredit} Subreditt!!</h1>`);
});

app.get('/user/:userid/comments/:commentsid', (req, res) => {
    
    console.log(req.params);

    res.send('USER ROUTE');
});


app.get('/search', (req, res) => {
    
    const { q } = req.query;

    res.send(`YOU ARE TRYING TO SEARCH ${q}`);
});

app.get('/products/:productid', (req, res) => {
    
    console.log(req.params);
    console.log(req.query);

    res.send('PRODUCT PAGE');
});




app.listen(8000, () => {
    console.log('server started listening at port 8000');
})