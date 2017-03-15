var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

//Ready to parse JSON in Post
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

//Connect db
mongoose.connect('mongodb://localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
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


//Posting tasks
app.post('/tasks', function(req, res){
    var t = new Task({
      name: req.body.name,
      user: req.body.name,
      status: req.body.status,
      start: req.body.start
  });
    t.save(function(err,t) {
        if (err) return res.status(500).send(err);
        res.status(201).send(t);
    });
});

//Modify a task

app.put('/tasks', function (req, res){
  Task.findById(req.body._id, function(err, p) {
    console.log(p);
  if (!p)
    return res.status(500).send(err);
  else {
        p.name = req.body.name;
        p.user = req.body.user;
        p.status = req.body.status;
        p.start = req.body.start;
        p.save(function(err,p) {
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
app.listen(3000, function () {
  console.log('listening on port 3000!')
})