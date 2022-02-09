const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];


// Make a new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
});


// Edit an existing comment
app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', comment);
});

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    console.log('Patching ' + id);
});

// Display comment index
app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
});

// Display a specific comment
app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
});

app.get('/tacos', (req, res) => {
    res.send('Hello');
});

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send('got a post request');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});





// Common way to implement a REST API
// GET /comments  - list all comments
// POST  /comments - create a new comment
// GET /comments/:id - get one comment using id
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - destroy one comment

