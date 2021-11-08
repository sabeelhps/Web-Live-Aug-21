const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Display All the products
router.get('/products', async(req, res) => {
    
    const products = await Product.find({});

    // console.log(products);

    res.send(products);
});



module.exports = router;