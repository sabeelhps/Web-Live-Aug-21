const mongoose = require('mongoose');



const quotesSchema = new mongoose.Schema({
    author: {
        type: String
    },
    text: {
        type: String
    }
});

module.exports = mongoose.model('Quotes', quotesSchema);
