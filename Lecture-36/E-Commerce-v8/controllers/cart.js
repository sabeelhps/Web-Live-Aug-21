const User = require('../models/user');
const Product = require('../models/product');

module.exports.showCart=async(req, res) => {
    
    
    const user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
    const productInfo = user.cart.map((p) => p.desc).join(',');
   

    res.render('cart/cart', { user ,totalAmount,productInfo});
}

module.exports.addToCart=async(req, res) => {
    
    const { productid } = req.params;
    const userid = req.user._id;
    const product = await Product.findById(productid);
    const user = await User.findById(userid);
    
    user.cart.push(product);

    await user.save();

    res.redirect('/user/cart');
}