const express = require('express');
const app = express();


app.get('/r/:subreddit', (req, res) => {

});


app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});