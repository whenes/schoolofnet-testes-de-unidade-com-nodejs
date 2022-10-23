const sinon = require('sinon');
const chai = require('chai');
const mongoose = require('mongoose');
const Todo = require('./../models/task');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const uri = 'http://localhost:3000';

describe('Tasks request', () => {
  it('should make a request and return a list of tasks', (done) => {
    chai.request(uri).get('/tasks').end((err, result) => {
      if (!err) {
        chai.expect(result.body.status).to.be.true;
        chai.expect(result.body.data).to.be.an('array');
        done();
      }
    });
  });
  it('should make a request and not send name form data', (done) => {
    chai.request(uri).post('/tasks').send().end((err, res) => {
      if (err) {
        chai.expect(res.body.status).to.be.false;
        chai.expect(res).to.have.status(500);
      }
      done();
    });
  });
  it('should make a request and send name form data', (done) => {
    chai.request(uri).post('/tasks').send({ name: 'Task teste 30'}).end((err, res) => {
      if (!err) {
        chai.expect(res.body.status).to.be.true;
        chai.expect(res).to.have.status(201);
      }
      done();
    });
  });
});