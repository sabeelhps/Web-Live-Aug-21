const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


let comments = [
    {
        id: uuid(),
        username: 'Sabeel',
        text: 'Nice Product.Go for It!!'
    },
    {
        id: uuid(),
        username: 'Kartik',
        text: 'Bad Product dont buy it'
    },
    {
        id: uuid(),
        username: 'Vivek',
        text: 'Good Product'
    }
];


app.get('/', (req, res) => {
    res.send('connected');
});


// List all the comments 
app.get('/comments', (req, res) => {
    
    res.render('index', { comments });
});


// Get the form for new comment
app.get('/comments/new', (req, res) => {
    
    res.render('new');
});



// Creating a New Comment
app.post('/comments', (req, res) => {
    
    const { username, text } = req.body;

    comments.push({ username, text, id: uuid() });

    res.redirect('/comments');
});


// Displaying Particular Comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const foundComment = comments.find((comment) => comment.id === commentid);
    res.render('show',{comment:foundComment});
});

// Get the edit form prefilled with the current data
app.get('/comments/:commentid/edit', (req, res) => {

    const { commentid } = req.params;

    const foundComment = comments.find((comment) => comment.id === commentid);

    res.render('edit', { comment: foundComment });
});


// Updating the comment Text
app.patch('/comments/:commentid', (req, res) => {
    
    const { commentid } = req.params;
    const foundComment = comments.find((comment) => comment.id === commentid);

    const { text } = req.body;

    foundComment.text = text;

    res.redirect('/comments');
});


app.delete('/comments/:commentid', (req, res) => {
    
    const { commentid } = req.params;
    const newCommentsArray = comments.filter((comment) => comment.id !== commentid);
    comments = newCommentsArray;
    
    res.redirect('/comments');

});




app.listen(8000, () => {
    console.log('server running at port 8000');
})