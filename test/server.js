/**
 * Created by henkensm on 15/02/2016.
 */

var request = require('supertest');
require = require('really-need');
describe('loading express', function(){
    var server;

    beforeEach(function(){
        server = require('../app/server', {bustCache:true});
    });
    afterEach(function(done){
        server.close(done);
    });

    it('responds to /', function testRoot(done){
        request(server).get('/').expect(200, done);
    });

    it('404 everything else', function testPath(done){
        request(server).get('/foo/bar').expect(404, done);
    });
});