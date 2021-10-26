const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


const comments = [
    {
        id: 0,
        username: 'Sabeel',
        text: 'Nice Product.Go for It!!'
    },
    {
        id: 1,
        username: 'Kartik',
        text: 'Bad Product dont buy it'
    },
    {
        id: 2,
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

    comments.push({ username, text, id: comments.length });

    res.redirect('/comments');
});


// Displaying Particular Comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const foundComment = comments.find((comment)=>comment.id=== parseInt(commentid))
    res.render('show',{comment:foundComment});
});




app.listen(8000, () => {
    console.log('server running at port 8000');
})