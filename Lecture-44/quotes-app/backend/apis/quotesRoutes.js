const router = require('express').Router();
const Quotes = require('../models/qoutes');


router.get('/allquotes', async (req, res) => {
    
    try {
        const allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch (e) {
        res.status(400).json({ msg: 'Something Went Wrong!!!' });
    }
});

router.post('/addQuotes', async (req, res) => {
    
    const { author, text } = req.body;
    await Quotes.create({ author, text });
    res.status(200).json({ msg: 'New Quote Created Successfully' });
});


router.get('/quotes/:id', async(req, res) => {
    const quote = await Quotes.findById(req.params.id);
    res.status(200).json(quote);
})

module.exports = router;