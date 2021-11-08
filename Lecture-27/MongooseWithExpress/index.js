const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes 

const productRoutes = require('./routes/productRoutes');



mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


// seed the db with the dummy products
// seedDB();


app.get('/', (req, res) => {
    res.send('Connnected');
})


app.use(productRoutes);



app.listen(3000, () => {
    console.log('server started at port 3000');
})