const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blog = require(__dirname+'/models/blog');

// Creating an express app
const app = express();

// Requires this
app.listen(3000);

// Configuration setting - which view engine to use
app.set('view engine', 'ejs');

console.log("Before Await");
mongoose.connect('mongodb+srv://database_user:test1234@cluster0.ycqmy.mongodb.net/nodeJsStarterDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
console.log("After Await");

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


// Creates a new blog
app.get("/new-blog", (req, res) => {

    var blog = new Blog({
        title : "New Blog 3",
        content : "New Blog 3 Content"
    });

    // Saving the blog post
    blog.save().then( (result) => {
        res.send(result);
    } ).catch( (err) => {
        res.send(err);
    } );

});

// Lists all the blogs in the database
app.get("/list-all", (req, res) => {

    Blog.find().sort("-1").then( (result) => {
        res.send(result);
    }).catch( (err) => {
        res.send(err);
    });

});

// this is default, if the script execution reaches this point, it will be executed for sure.
app.use((req, res) => {
    console.log("In the use method that logs console message");
});

