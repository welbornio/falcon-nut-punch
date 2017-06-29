var app = require('../index').app;

var user = {
	name: 'olybobo',
	id: 1
};

app.get('/user', function (req, res) {
	res.send({
		user: user
	});
});

app.get('/user/decks', function (req, res) {
	res.send({
		decks: [
			{
				name: 'my deck 1',
				cards: [
					{
						name: 'my card 1'
					},
					{
						name: 'my card 2'
					}
				]
			},
			{
				name: 'my deck 2',
				cards: [
					{
						name: 'my card 2'
					},
					{
						name: 'my card 3'
					}
				]
			}
		]
	});
});

app.get('/user/decks/:id', function (req, res) {
	var id = req.params.id;
	res.send({
		deck: {
			name: 'my deck 2',
			id: id,
			cards: [
				{
					name: 'my card 2'
				},
				{
					name: 'my card 3'
				}
			]
		}
	});
});


