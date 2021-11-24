const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    comment: {
        type: String,
        trim: true,
    }
},{timestamps:true});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;