// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

let url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
	if(err){
		return console.log('Unable to connect to server.');
	}
	console.log('Connected Successfully.');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do.',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'Jacob',
		age: 25,
		location: 'Romania'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to create Users', err);
		}
		console.log('Created successfully');
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	client.close();
});
