const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')));

// /public
//    /css
//    /js
//    /images

// express "requires" ejs behind the scenes here when you set this
//  no need to require it above
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));  // takes the dir of index.js and appends /views
// this is a best practice to allow for running the script from outside its directory
// since express looks at the CWD when you run the script

app.get('/', (req, res) => {
    // view/ directory is assumed
    res.render('home');
})

app.get('/data', (req, res) => {
    res.send(redditData);
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ];
    res.render('cats', {cats});
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})