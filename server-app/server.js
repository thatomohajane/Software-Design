var express = require('express');
var app = express();


var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));
 

var server = app.listen(3000, function () {
   console.log("REST API listening on http://127.0.0.1:3000/");
})