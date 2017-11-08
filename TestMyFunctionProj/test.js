let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = require('assert');
let expect = chai.expect;

chai.use(chaiHttp);

describe("First Test", () => {
    it("should return a message", (done) => {
        chai.request('http://localhost:7071')
        .get('/api/values/34')
        .end(function(err,res){
            expect(res.body).to.equal("passed arg 34");
            done();
        })
    }).timeout(50000);
});
