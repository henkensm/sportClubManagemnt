/**
 * Created by henkensm on 15/02/2016.
 */

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.status(200).send('OK');
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
});

module.exports = server;
