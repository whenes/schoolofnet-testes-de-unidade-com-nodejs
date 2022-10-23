const sinon = require('sinon');
const chai = require('chai');
const mongoose = require('mongoose');
const Todo = require('./../models/task');

describe('Tasks', () => {
  it('should create a new task', (done) => {
    let mock = sinon.mock(new Todo({ name:'task2' }));
    let todo = mock.object;
    mock.expects('save').yields(null, { status: true, data: { name: 'Task2', completed: false } });
    todo.save((err, result) => {
      mock.verify();
      mock.restore();
      chai.expect(result.status).to.equal(true);
      chai.expect(result.data).to.be.an('object');
      done();
    })
  });
  it('should remove one task by id', (done) => {
    const mock = sinon.mock(Todo);
    mock.expects('findOneAndRemove').withArgs({ _id: '63559b5eac6df81863a8c704' })
      .yields(null, { status: true, _id: '63559b5eac6df81863a8c704' });

      Todo.findOneAndRemove({ _id: '63559b5eac6df81863a8c704' }, (err, result) => {
        mock.verify();
        mock.restore();

        chai.expect(result.status).to.equal(true);
        done();
      });
  });
  it('should return all tasks', (done) => {
    const mock = sinon.mock(Todo);
    mock.expects('find').yields(null, { status: true, data: [] });
    Todo.find((err, result) => {
      mock.verify();
      mock.restore();
      chai.expect(result.status).to.equal(true);
      chai.expect(result.data).to.be.an('array');
      done();
    });
  });
  it('should return error find', (done) => {
    const mock = sinon.mock(Todo);
    mock.expects('find').yields({
      status: false
    }, null);
    Todo.find((err, res) => {
      mock.verify();
      mock.restore();
      chai.expect(err.status).to.be.false;
      chai.expect(err.status).to.not.be.true;
    });
    done();
  });
});