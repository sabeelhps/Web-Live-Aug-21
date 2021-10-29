const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => {
        console.log('Connection Open!!');
    })
    .catch((err) => {
        console.log('Something Went Wrong');
        console.log(err);
    });
