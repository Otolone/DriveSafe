require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
//import route
var {postUser, updateUserById, findUserById} = require('./routes/users');

var {postComment, updateCommentById} = require('./routes/comment');
var {
  postPost,
  getPosts,
  getPostById,
  updatePostById,
} = require('./routes/post');
var {postComment, getComments, updateCommentById} = require('./routes/comment');

var mongoose = require('mongoose');

var cors = require('cors');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const uri = process.env.DATABASE;

if (!uri) {
  console.error(
    'MongoDB connection string is not defined. Please set MONGODB_URI in your environment variables.',
  );
  process.exit(1);
}

mongoose
  .connect(uri)
  .then(() => console.log('DB connected'))
  .catch(err => console.log('DB connection error: ', err));

// middleware
//end point to get
//post
app.post('/postUser', postUser);
app.post('/postPost', postPost);
app.post('/postComment', postComment);

//update
app.put('/users/:id', updateUserById);
app.put('/comments/:d', updateCommentById);
app.put('/updatePostById/:d', updatePostById);

//get
app.get('/getPosts', getPosts);
app.get('/getComments', getComments);

app.get('/getuserbyId/:id', findUserById);
app.get('/getPostbyId/:id', getPostById);

app.listen(process.env.PORT || 8000, () =>
  console.log('Server running on port 8000'),
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
