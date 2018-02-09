const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Blog')
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));

const blogs = require('./routes/blogs');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(cors())
app.use(express.static(path.join(__dirname, 'src/public')));
app.set('view engine', 'html');

//app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/blogs', blogs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3000)

module.exports = app;