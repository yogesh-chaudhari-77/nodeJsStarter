// Get the mongoose package
const mongoose = require('mongoose');

// get the schema from mongoose
const Schema = mongoose.Schema;

// Create a schema
const BlogSchema = new Schema({

    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    }, 

},{timestamps : true});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;