var index = require('../../server/routes/index');
var sinon = require('sinon');
describe('loading express', function(){

    var req, res;
    beforeEach(function(){
        res = { "render": function(view, options, callback){}};
        req = {"params" : {}};
    });

    it('index page', function testSlash(){
        var mockRes = sinon.mock(res);
        mockRes.expects("render").once().withArgs('index');
        index.index(req, res);
        mockRes.verify();
    });

    it('/partial/pageName', function testPath(){
        var mockRes = sinon.mock(res);
        mockRes.expects("render").once().withArgs('partials/pageName');
        req.params.name = 'pageName';
        index.partials(req, res);
        mockRes.verify();
    });
});