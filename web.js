var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function (request, response) {

    var fs = require('fs');
    fs.readFile('index.html', function (err, data) {
        if (err) throw err;
        response.send(data.toString());

    });


});

app.get('/Quote', function (request, response) {

    response.send('work in progress');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});