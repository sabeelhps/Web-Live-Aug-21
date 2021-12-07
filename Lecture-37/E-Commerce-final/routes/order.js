const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const User = require('../models/user');
const Product = require('../models/product');

router.get('/user/myorders',isLoggedIn,async(req, res) => {
    
    const userid = req.user._id;

    const user = await User.findById(userid).populate({
        path: 'orders',
        populate: {
            path: 'orderedProducts'
        }
    });

    res.render('orders/myOrder',{orders:user.orders});
});

module.exports = router;