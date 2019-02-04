var express = require('express');

var app = express();

app.use(express.static(__dirname + '/src')); // set the static files location /public/img will be /img for users
app.use('/node_modules',express.static(__dirname + '/node_modules')); // Js from modules

app.get('/', function (req, res) {
    res.sendfile('/src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


var port = process.env.PORT || 8080;

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port + "!");