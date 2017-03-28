var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

var taskSchema = mongoose.Schema({
  name: String,
  user: String,
  status: String,
  start: Date
});

var Task = mongoose.model('Task', taskSchema);

var clean = new Task({
  name: 'clean',
  user: 'foo',
  status: 'done',
  start: new Date(2015, 6)
});

clean.save(function (err, clean) {
  if (err) return console.error(err);
});

var cook = new Task({
  name: 'cook',
  user: 'bar',
  status: 'doing',
  start: new Date(2017, 8)
});

cook.save(function (err, cook) {
  if (err) return console.error(err);
});

Task.find(function (err, tasks) {
  if (err) return console.error(err);
  console.log(tasks);
})