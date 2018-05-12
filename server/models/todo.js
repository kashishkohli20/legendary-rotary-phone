var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}, completed: {
		type: Boolean,
		default: false
	}, completedAt: {
		type: Number,
		default: null
	}
});

// var newTodo = new Todo({
// 	text: 'Cook Dinner'
// });
//
// newTodo.save().then((docs) => {
// 	console.log('Saved Successfully ', docs);
// }, (err) => {
// 	console.log('Unable to save', err);
// });
//
// var newTodo = new Todo({
// 	text: '                   Go to gym             '
// 	// completed: true,
// 	// completedAt: 123
// });
//
// newTodo.save().then((docs) => {
// 	console.log('Saved Successfully ', docs);
// }, (err) => {
// 	console.log('Unable to save todo', err);
// });

module.exports = {
	Todo
}
