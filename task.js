const Todo = require('./models/task');

module.exports = {
  create: (req, res) => {
    let todo = new Todo({
      name: req.body.name
    });
    todo.save((err, data) => {
      if (!err) {
        return res.status(201).json({ status: true, data: data });
      }
      return res.status(500).json({ status: false, data: {} });
    });
  },
  remove: (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (!err) {
        return res.status(200).json({ status: true, _id: req.params.id });
      }
    });
    return res.status(500).json({ status: false, _id: '' });
  },
  list: (req, res) => {
    Todo.find({}).then((result) => {
      if (result) {
        return res.status(200).json({ status: true, data: result });
      }
      return res.status(404).json({ status: false, data: [] });    
    }).catch((err) => {
      return res.status(500).json({ status: false, data: [] });    
    });
  }
};