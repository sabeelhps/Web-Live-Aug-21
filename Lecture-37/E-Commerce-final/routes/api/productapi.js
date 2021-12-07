const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/user');

router.post('/:productid/like',isLoggedIn,async(req, res) => {
    
    const { productid } = req.params;
    // grab the current loggedin user
    const user = req.user;
    const isLiked = user.wishList.includes(productid);

    // if (isLiked) {
    //     req.user=await User.findByIdAndUpdate(req.user._id, { $pull: { wishList: productid } });
    // } else {
    //     req.user=await User.findByIdAndUpdate(req.user._id, { $addToSet: { wishList: productid } });
    // }

    const option = isLiked ? '$pull' : '$addToSet';
    req.user = await User.findByIdAndUpdate(req.user._id, { [option]: { wishList: productid } },{new:true});


    res.send('LIKE API');
})








module.exports = router;