var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const uuidV4 = require('uuid/v4');
var cors = require('cors')

var cookies = [];
//Ready to parse JSON in Post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
//Connect db
mongoose.connect('mongodb://localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

//Schema for mongoose
var taskSchema = mongoose.Schema({
  name: String,
  user: String,
  status: String,
  start: Date
});

var Task = mongoose.model('Task', taskSchema);

var userSchema = mongoose.Schema({
  user: String,
  pass: String
});

var User = mongoose.model('User', userSchema);

//Cookies

app.use(cookieParser());


//Posting login
app.post('/login', function (req, res) {
  var query = User.where({ user: req.body.user });
  query.findOne(function (err, user) {
    if (err) { return res.status(500).send(err); }
    if (user) {
      if (user.pass == req.body.pass) {
        var cook = uuidV4();
        cookies.push(cook);
        res.cookie('token', cook, { domain: 'localhost' });
        res.status(201).send({
          status: true
        });
      }
      else {
        res.status(401).send({
          status: false
        });
      }
    }
    else {
      res.status(401).send({
        status: false
      });
    }
  });
})


//Logger handler

app.use(function (req, res, next) {
  var exist = false;
  console.log(req.cookies);
  console.log(cookies);
  cookies.forEach(function (element) {
    if (element == req.cookies.token) {
      exist = true;
      return;
    }
  });
  if (exist) {
    console.log("existe");
    next();
  }
  else {
    console.log("NO EXISTE");
    res.status(401).send({
      location: '/login'
    });
  }
});

//Posting tasks 
app.post('/tasks', function (req, res) {
  var t = new Task({
    name: req.body.name,
    user: req.body.user,
    status: req.body.status,
    start: req.body.start
  });
  t.save(function (err, t) {
    if (err) return res.status(500).send(err);
    res.status(201).send(t);
  });
});

//Posting users
app.post('/users', function (req, res) {
  var u = new User({
    user: req.body.user,
    pass: req.body.pass
  });
  u.save(function (err, u) {
    if (err) return res.status(500).send(err);
    res.status(201).send(u);
  });
});




//Modify a task

app.put('/tasks', function (req, res) {
  Task.findById(req.body._id, function (err, p) {
    if (!p)
      return res.status(500).send(err);
    else {
      p.name = req.body.name;
      p.user = req.body.user;
      p.status = req.body.status;
      p.start = req.body.start;
      p.save(function (err, p) {
        if (err)
          res.status(500).send(err);
        else
          res.status(201).send(p);
      });
    }
  });
});


//Getting all tasks
app.get('/tasks', function (req, res) {
  Task.find(function (err, tasks) {
    if (err) return res.status(500).send(err);
    res.send(tasks);
  })
})

//Listening
app.listen(5000, function () {
  console.log('listening on port 5000!')
})