	var express = require('express'),
	http = require('http'),
	app = express(),
	hostname = '127.0.0.1',
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Mongod = require('mongod'),
	User = require('./api/model/studentModel'),
	bodyParser = require ('body-parser'); 
	mongoose.Promise = global.Promise;
	
	mongoose.connect('mongodb://localhost/andela');
    	 
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static(__dirname + '/public'));
	app.use (bodyParser.json());

	var routes = express.Router();
	routes = require('./api/route/studentRoute');
	routes(app);

	var server = http.createServer(app);
	server.listen (port,hostname, () => {
	console.log('listening on http://localhost:3000');
});

	