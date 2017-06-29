var app = require('../index').app;

var game = {
	id: 1,
	tokens: [
		{
			name: "Tree",
			x: 1,
			y: 1
		},
		{
			name: "Fire",
			x: 2,
			y: 2
		}
	]
};

app.get('/game/:id/board', function (req, res) {
	res.send({
		game: game
	});
});