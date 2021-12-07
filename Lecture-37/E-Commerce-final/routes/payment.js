const express = require('express');
const router = express.Router();
const request = require('request');
const jsSHA = require('jssha');
const { v4: uuid } = require('uuid');
const { isLoggedIn } = require('../middleware');
const Order = require('../models/order');



router.post('/payment_gateway/payumoney',isLoggedIn,(req, res) => {
    
    req.body.txnid = uuid();//Here pass txnid and it should be different on every call
    req.body.email = req.user.email;
    req.body.firstname = req.user.username;
    //Here save all the details in pay object 
    const pay = req.body;
    
    const hashString =  process.env.MERCHANT_KEY//store in in different file
                        + '|' + pay.txnid
                        + '|' + pay.amount 
                        + '|' + pay.productinfo 
                        + '|' + pay.firstname 
                        + '|' + pay.email 
                        + '|' + '||||||||||'
                        + process.env.MERCHANT_SALT //store in in different file
    
    const sha = new jsSHA('SHA-512', "TEXT");
    
    sha.update(hashString);
    //Getting hashed value from sha module
    const hash = sha.getHash("HEX");
    
    //We have to additionally pass merchant key to API so remember to include it.
    pay.key =   process.env.MERCHANT_KEY //store in in different file;
    pay.surl = 'http://localhost:5000/payment/success';
    pay.furl = 'http://localhost:5000/payment/fail';
    pay.hash = hash;
    
    //Making an HTTP/HTTPS call with request
    request.post({
    
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        url: 'https://sandboxsecure.payu.in/_payment', //Testing url
        form: pay
    
    }, function (error, httpRes, body) {
        if (error) 
            res.send(
                {
                    status: false,
                    message:error.toString()
                });
        
        if (httpRes.statusCode === 200) {
            res.send(body);
        }
        else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
            res.redirect(httpRes.headers.location.toString());
        }
    })
});

router.post('/payment/success',isLoggedIn, async(req, res) => {
    
    const { txnid, productinfo, amount } = req.body;

    // Getting the current User 
    const user = req.user;


    // Creating a new order and storing the whole cart into orderedProduct
    const order = new Order({txnid,productinfo,amount,orderedProducts:[...user.cart]})
    
    // Pushing the new order into user's order array
    user.orders.push(order);

    // saving the new order in database
    await order.save();

    // removing everything from current user's cart
    user.cart.splice(0, user.cart.length);

    // saving the updated user in the database and assigning updated user to the req.user
    req.user = await user.save();

    req.flash('success', 'Placed your order Successfully!!');
    res.redirect('/user/myorders');
})


router.post('/payment/fail',isLoggedIn, (req, res) => {
   
    req.flash('error',`Oops! Can't place your order at the moment.Please try again after some time!`)
    res.redirect('/user/cart');
})









module.exports = router;