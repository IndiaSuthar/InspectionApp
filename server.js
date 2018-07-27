/**@author: Bharat Bhushan
 * @CreatedDate:  19-May-2018
 * The server file , this file is responsible to start the node JS engine.
 * Load the nodeJS express, which is responsible to publish the files.
 */

var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 8080; 	
var fs = require('fs');			// set the port
//var database = require('./config/database'); 			// load the database config
var bodyParser = require('body-parser');
var morgan  = require('morgan');
var methodOverride = require('method-override');
var clientConnection = require('./app/config/database.js');

app.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
     next();
});
app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// routes ======================================================================
require('./app/routes.js')(app);
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
