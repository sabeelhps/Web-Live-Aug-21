const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/',express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

const Todos = ["Go to Gym", "Buy Groceries", "Watch Movie", "Go to Shopping"];


app.get('/todos', (req, res) => {
    
    if (req.xhr) {
        console.log('AJAX Request');
        res.json(Todos);
    } else {
        console.log('Normal Request');
        res.render('todos', { Todos });
    }
});

app.post('/todos', (req, res) => {
    
    try {
        const { todo } = req.body;
        Todos.push(todo);

        if (req.xhr) {
            res.status(200).json({ msg: 'Todo Added Successfully' });
        }
        else {
            res.redirect('/todos');
        }
    }
    catch (e) {
        res.status(400).json({ msg: 'Something went wrong' });
    }
});



app.listen(3000, () => {
    console.log('server started at port 3000');
})