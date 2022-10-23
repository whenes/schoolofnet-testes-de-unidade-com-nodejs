const mongoose = require('mongoose');

const Todo = mongoose.Schema({
  name: { type: String, require: true },
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', Todo);