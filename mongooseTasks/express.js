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
    var t = new Task(req.body);
    t.save(function(err,t) {
        if (err) return res.status(500).send(err);
        res.status(201).send(t);
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