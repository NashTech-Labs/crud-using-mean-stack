var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = 9090;
var jsonfile = require('jsonfile')
var bodyParser = require('body-parser');
var fs = require('fs-extra')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var employeeModule = require('./routes/employeeController.js');
var methodOverride = require('method-override');
app.use(methodOverride());



mongoose.set('debug', true);


mongoose.connect('mongodb://127.0.0.1:27017/dbnode');
mongoose.connection.on('error', console.error.bind(console, 'connection error:' ));

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to::>  ' + 'mongodb://127.0.0.1:27017/dbnode' );
});


app.use(function (req, res, next) {
    var typeOf = false;
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        typeOf = true;
    }
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-Allow-Headers']);
        typeOf = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        typeOf = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        typeOf = true;
    }
    // intercept OPTIONS method
    if (typeOf && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});



app.all('/*', function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Headers", "application/json");
res.header("Access-Control-Allow-Headers", "*/*");
  next();
});

app.get('/', function(req,res){
	res.send("Node Server Running on PORT:9090"); 
});

app.get('/employeelist', employeeModule.employeeListMethod);

app.post('/editemployee', employeeModule.employeeEditMethod);

app.post('/addemployee', employeeModule.employeeAddMethod);

app.delete('/deleteemployee/:_id',employeeModule.employeeDeleteMethod);



app.listen(port);
console.log('server started at:  '+port);



