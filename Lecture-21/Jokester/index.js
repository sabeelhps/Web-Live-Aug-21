const joke = require('give-me-a-joke');
const colors = require('colors');

joke.getRandomCNJoke (function(joke) {
    console.log(joke.rainbow);
});