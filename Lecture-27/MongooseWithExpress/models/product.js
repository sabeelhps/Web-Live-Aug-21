const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:true
    },
    price: {
        type: Number,
        min:0
    },
    desc: {
        type: String,
        trim:true
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;