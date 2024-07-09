require('dotenv').config();
var createError = require('http-errors');
var express = require('express');

var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//configure multer for file upload

//import route
var {
  postUser, 
  updateUserById, 
  findUserById, 
  findUserByEmail,
  updateUserProfilePicture
} = require('./routes/users');

var {postComment, updateCommentById} = require('./routes/comment');
var {
  postPost,
  getPosts,
  getPostById,
  updatePostById,
} = require('./routes/post');
var {postComment, getComments, updateCommentById} = require('./routes/comment');

//var {home} = require('./routes/home');

var mongoose = require('mongoose');

var cors = require('cors');
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const uri = process.env.MONGODB_URI;
const port = process.env.PORT;

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



//post
app.post('/postUser', postUser);
app.post('/postPost', postPost);
app.post('/postComment', postComment);

//update
app.put('/updateUserById/:id', updateUserById);
app.put('/comments/:id', updateCommentById);
app.put('/updatePostById/:id', updatePostById); 

app.patch('/updateUserProfilePicture/:id',updateUserProfilePicture)


//get
app.get('/', (req, res) => {
  res.send('DriveSafe App')
})
app.get('/getPosts', getPosts);
app.get('/getComments', getComments);

app.get('/getuserbyId/:id', findUserById);
app.get('/finduserbyEmail/:email', findUserByEmail);
app.get('/getPostbyId/:id', getPostById);

app.listen(port || 5001, () =>     //8000
  console.log('Server running on port 5001'),
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
