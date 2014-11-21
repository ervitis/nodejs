var express = require('express');
var http = require('http');

var app = express();
var router = express.Router();

var path = __dirname + '/index.html';

app.use(express.static(path));

router.get('/', function(request, response) {
    response.sendfile(path);
});

app.use(router).listen(8080);
