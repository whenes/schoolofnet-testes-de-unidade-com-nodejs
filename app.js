const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const task = require('./task');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test_mongo');

app.get('/', (req, res) => {
  res.send('my route');
});

app.post('/tasks', task.create);
app.get('/tasks', task.list);
app.delete('/tasks/:id', task.remove);

app.listen(3000, () => {
  console.log('express started on http://localhost:3000/')
});