const mongoose = require('mongoose');
const { Schema } = mongoose; //identique à const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleId: String,
	name: Array
});

mongoose.model('users', userSchema);
