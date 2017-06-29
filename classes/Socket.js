var server = require('../index').server;
var io = require('socket.io')(server);

io.on('connection', function (socket) {
	console.log('connected to!');

	socket.on('game:event', function (a) {
	});

	socket.emit('server:event', {event: "socket:connected"});
});
