declare var require, __dirname;

var express = require('express');
var path = require('path');
var app = express();

app.use('/app',express.static(path.join(__dirname, '../dist')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
