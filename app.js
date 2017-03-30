const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const index = require('./routes/index');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const messagesRoutes = require('./routes/messages.js');
const app = express();

require('dotenv').config();

const http = require('http').Server(app);
const io = require('socket.io')(http);

// calls in the database
const models = require('./models/index');

// // this is what you need if there isn't a full stack app
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

// // didn't work, but possibly on the right track
// io.on('chat message', function () {
//   models.Messages.create({
//     message: req.body.message,
//     username: req.user.username
//   })//.then(function (messages) {
//     //res.redirect('/messages');
//   //});
// });

// Listen for new client connections.
io.on('connection', function(socket) {

  // Listen for the client to send a _"chat message"_ message.
  socket.on('chat message', function(data) {
    console.log(data)

    // Store the data in the database.
    models.Messages.create({
      message  : data.message,
      username : data.username
    });
  });
});

io.on('error', function (error) {
  debug('error: ' + error)
})

http.listen(8080, function(){
  console.log('listening on *:8080');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/messages', messagesRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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

module.exports = app;
