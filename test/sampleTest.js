import assert from 'assert';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

const user = { id: 1, name: 'hong' };
const getUser = () => {
  return user;
};

// describe('@Array!!', () => {
//   describe('#indexOf()', () => {
//     before(() => console.log('#before!!'));
//     beforeEach(() => console.log('#beforeEach!!'));
//     after(() => console.log('#after!!'));
//     afterEach(() => console.log('-------------- #afterEach!!'));
//     it('should return -1 when the value is not present', () => {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//     it('should return 1 when the value is 2', () => {
//       assert.equal([1, 2, 3].indexOf(2), 1);
//     });

//     it('sample deepEqual user and getUser()', () => {
//       assert.deepEqual(getUser(), user);
//     });
//   });
// });

const should = chai.should();
chai.use(chaiHttp);
describe('HttpServer:80 TEST', () => {
  it('json - GET', done => {
    chai
      .request('http://0.0.0.0')
      .get('/json')
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        done();
      });
  });
});

describe('json-server:5001 TEST', () => {});
