const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Blog = require('../models/Blog');

/* GET ALL BlogS */
router.get('/', function(req, res, next) {
  Blog.getBlogs(function (err, blogs) {
    if (err) return next(err);
    res.json(blogs);
  });
});

/* SAVE Blog */
router.post('/', function(req, res, next) {
  Blog.create(req.body, function (err, blog) {
    if (err) return next(err);
    res.json({
      blog: blog,
      success: true,
      message: 'Blog saved successfully!'
    });
  });
});

/* GET SINGLE Blog BY ID */
router.get('/:id', function(req, res, next) {
  Blog.getBlogById(req.params.id, function (err, blog) {
    if (err) return next(err);
    res.json(blog);
  });
});

/* UPDATE Blog */
router.put('/:id', function(req, res, next) {
  Blog.findByIdAndUpdate(req.params.id, req.body, function (err, blog) {
    if (err) return next(err);
    res.json(blog);
  });
});

/* DELETE Blog */
router.delete('/:id', function(req, res, next) {
  Blog.findByIdAndRemove(req.params.id, req.body, function (err, blog) {
    if (err) return next(err);
    res.json(blog);
    console.log('Deleted')
  });
});

module.exports = router;