var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

/* In order to test hw4 without restarting the server each time there is a change in index.html, it is the
best to move the read of the file inside the apt.get callback function */
   
//var text = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html').toString();
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
