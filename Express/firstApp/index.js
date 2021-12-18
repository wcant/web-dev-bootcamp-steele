const { application } = require("express");
const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got a new request");
//   res.send("got request");
// });
app.get("/", (req, res) => {
  res.send("<h1>this is the home page</h1>");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing the ${subreddit} subreddit.</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing the Post ID: ${postId} in the ${subreddit} subreddit.</h1>`
  );
});

// /cats => 'meow'
app.get("/cats", (req, res) => {
  res.send("meow");
});

// /dogs => 'woof'
app.get("/dogs", (req, res) => {
  res.send("woof");
});

// "/"

// you want this error catcher to be after all the other routes so that
// they have a chance to run first, as an http request can only get
// one response
app.get("*", (req, res) => {
  res.send("I dont know that path");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
