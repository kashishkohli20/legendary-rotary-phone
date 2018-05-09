const {MongoClient, ObjectID} = require('mongodb');

let url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
	if(err) {
		return console.log('Unable to connect to server', err);
	}
	console.log('Connected Successfully!');
	const db = client.db('TodoApp');
	//
	// db.collection('Todos').find({completed: false}).toArray().then((documents) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(documents, undefined, 2));
	// }, (err) => {
	// 	if (err) {
	// 		console.log('Unable to fetch Todos', err);
	// 	}
	// });

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5af21046ea7822bfedeac99d')
	// }).toArray().then((docs) => {
	// 	console.log('Todos:');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Users').find({name: 'Jacob'}).count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name: 'Jacob'}).toArray().then((docs) => {
		console.log('Users: ');
		console.log(JSON.stringify(docs, undefined, 2));
	});
	client.close();
});
