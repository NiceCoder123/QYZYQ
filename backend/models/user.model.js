const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,		
	},

	lastName: {
		type: String,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
	},

	picture: {
		type: String,
	}
}, 

)


const User = mongoose.model('User', userSchema);

module.exports = User;