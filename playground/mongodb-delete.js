const {MongoClient, ObjectID} = require('mongodb');

let url ='mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
	if (err) {
		return console.log('Unable to connect to server: ', err);
	}

	console.log('Connected Successfully');
	const db = client.db('TodoApp');

	// FOR TODOS COLLECTION
	// deleteMany

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })


	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
	// 	console.log(result);
	// })

	// FOR USERS COLLECTION
	// db.collection('Users').deleteMany({name: 'Jacob'}).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5af18188a463412890b90d37')}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	})
	// db.close();
})
