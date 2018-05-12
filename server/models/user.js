var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		minlength: 1,
		required: true,
		trim: true
	}
});

// var newUser = new User({
// 	email: 'paulsmith@gmail.com'
// });
//
// newUser.save().then((docs) => {
// 	console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
// 	console.log('Unable to save', err);
// });

module.exports = {
	User
}
