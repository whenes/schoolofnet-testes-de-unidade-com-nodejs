// const chai = require('chai');
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);

// describe('request test', () => {
//   let res = {};

//   beforeEach((done) => {
//     chai.request('www.schoolofnet.com')
//       .get('/')
//       .end((err, response) => {
//         res = response;
//         done();
//       });
//   });

//   afterEach((done) => {
//     res = {};
//     done();
//   });

//   it('should have body not null', (done) => {
//     chai.expect(res.body).to.not.equal(null);
//     done();
//   });

//   it('sould request website and return statusCode=200', (done) => {
//     chai.expect(res.status).to.be.equal(200);
//     chai.expect(res).to.have.status(200);
//     done();
//   });
// });