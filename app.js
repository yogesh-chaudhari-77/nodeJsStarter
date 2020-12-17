const express = require('express');

// Creating an express app
const app = express();

// Requires this
app.listen(3000);

// Configuration setting - which view engine to use
app.set('view engine', 'ejs');

// All the files in the public directory will be served on browser request
app.use(express.static('public'));

// Anything that runs on the server, between request and response is called as middleware
app.get("/", (req, res) => {
    console.log("We are at the home page.");
    res.render('home', {});
});

// About request handler
app.get("/about", (req, res) => {
    console.log("We are at the home page.");
    res.render('about', {});
});

// this is default, if the script execution reaches this point, it will be executed for sure.
app.use((req, res) => {
    console.log("In the use method that logs console message");
});

