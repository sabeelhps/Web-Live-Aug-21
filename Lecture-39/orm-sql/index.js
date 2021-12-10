const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db');
const Blog = require('./models/blog');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


connectDB();


app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/blogs', async(req, res) => {
    
    const allBlogs = await Blog.findAll();

    res.render('index',{allBlogs});
});

app.get('/blogs/new', (req, res) => {
    

    res.render('new');
});

app.post('/blogs', async (req, res) => {
    
    const { title, img, desc } = req.body;

    await Blog.create({ title, img, desc });

    res.redirect('/blogs');
});

app.get('/blogs/:id', async (req, res) => {
    
    const { id } = req.params;

    const blog = await Blog.findOne({
        where: {
            id: id
        }
    });

    res.render('show', { blog });
});


app.get('/blogs/:id/edit', async (req, res) => {
    const { id } = req.params;

    const blog = await Blog.findOne({
        where: {
            id: id
        }
    });

    res.render('edit', { blog });
});


app.patch('/blogs/:id', async (req, res) => {

    const { id } = req.params;

    await Blog.update(req.body, {
        where: {
            id: id
        }
    })

    res.redirect(`/blogs/${id}`);
});


app.delete('/blogs/:id', async (req, res) => {
    const { id } = req.params;

    await Blog.destroy({
        where: {
            id: id
        }
    });

    res.redirect('/blogs');
});




app.listen(3000,()=>{
  console.log('server started at port 3000');
});