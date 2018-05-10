const {MongoClient, ObjectID} = require('mongodb');

let url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
	if (err) {
		return console.log('Unable to connect to server: ', err);
	}
	console.log('Connected Successfully');
	const db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5af42ad14f51d02e1857c53f')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5af2042c9a5ce019ec7e1ddc')
	}, {
		$set: {
			name: 'David',
			location: 'Australia'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});


});
