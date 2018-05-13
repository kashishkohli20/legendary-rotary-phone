const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({});		// cannot pass empty arguments, if you send it with empty arguments then all the data in db will be removed, so better avoid this

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove();  //find and delete

// Todo.findOneAndRemove().then((todo) => {
// 	console.log(todo);
// });

// Todo.findByIdAndRemove();	//find by id and remove

Todo.findByIdAndRemove('5af7f3f7e15e89b3c400e9b8').then((todo) => {
	console.log(todo);
});
