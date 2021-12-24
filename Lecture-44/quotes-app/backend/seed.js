const mongoose = require('mongoose');
const Quotes = require('./models/qoutes');


const DUMMY_QUOTES = [
    {
        author: 'Mahatma Gandhi',
        text:'A man is but the product of his thoughts. What he thinks, he becomes.'
    },
    {
        author: 'Mahatma Gandhi',
        text:'The greatness of humanity is not in being human, but in being humane.'
    },
    {
        author: 'Nelson Mandela',
        text:"It always seems impossible until it's done."
    },
    {
        author: 'Abraham Lincoln',
        text:"Democracy is by the people, for the people, of the people."
    },
]


async function seedDB() {
    await Quotes.insertMany(DUMMY_QUOTES);
    console.log('DB SEEDED!!!!');
}

module.exports = seedDB;

