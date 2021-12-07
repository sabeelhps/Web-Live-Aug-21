const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const Product = require('../models/product');
const User = require('../models/user');
const { showCart, addToCart} = require('../controllers/cart');

router.get('/cart',isLoggedIn,showCart)
router.post('/:productid/add',isLoggedIn, addToCart)


module.exports = router;