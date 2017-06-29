var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var helmet = require('helmet');
var webpack = require('webpack');

var app = express();
var server = require('http').Server(app);

module.exports = {
	app: app,
	server: server
};

//### fire up server
server.listen(process.env.PORT || 4242, function () {
	console.log('Listening on port %d', server.address().port);
});

// classes
require('./classes/User');
require('./classes/Game');
require('./classes/Socket');

//### express configuration
app.use(helmet());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: false}));
app.use(cookieParser());
