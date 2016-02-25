var api = require('../../server/routes/api');
var sinon = require('sinon');
describe('Routes api', function(){

    var req, res;
    beforeEach(function(){
        res = { "json": function(Object){}};
        req = {"params" : {}};
    });

    it('name', function testSlash(){
        var mockRes = sinon.mock(res);
        mockRes.expects("json").once().withArgs({name : 'Bob'});
        api.name(req, res);
        mockRes.verify();
    });

});