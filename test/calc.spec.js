// const calc = require('./../calc');
// const chai = require('chai');
// const sinon = require('sinon');

// describe('calc test',  function() {
//   it('should sum return 4', (done) => {
//     let result = calc.sum(2, 2);
//     chai.expect(result).to.equal(4);
//     done();
//   });
// });
// describe('calc test with sinon',  function() {
//   it('shold sum return 4', (done) => {
//     let mock = sinon.mock(calc);
//     mock.expects('sum').yields(null, 4);
//     calc.sum(2, 2, (err, result) => {
//       mock.verify();
//       mock.restore();
//       chai.expect(result).to.be.equal(4);
//       done(); 
//     });
//   });
//   it('stub func', (done) => {
//     let stub = sinon.stub(calc, 'sum');
//     stub.returns(5);
//     var result = calc.calc(4, 1);
//     // chai.expect(calc.sum).to.have.been.calledOnce;
//     chai.expect(result).to.equal(5);
//     stub.restore();
//     done();
//   });
// });