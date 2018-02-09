const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    updated_date: { type: Date, default: Date.now },
  });

const Blog = module.exports = mongoose.model('Blog', blogSchema);

//Fetch all blogs
module.exports.getBlogs = function(callback) {
    Blog.find(callback).sort({_id:-1});
};

//Fetch a single blog
module.exports.getBlogById = function(id, callback) {
    Blog.findById(id, callback);
};

//Fetch and update a blog
module.exports.getBlogByIdAndUpdate = function(id, callback) {
    Blog.findByIdAndUpdate(id, {}, options, callback);
};
  
//Fetch and delete a blog
module.exports.getBlogByIdAndRemove = function(id, callback) {
    Blog.findByIdAndRemove(id, callback);
};