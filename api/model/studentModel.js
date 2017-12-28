'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema ({
	Firstname: {
		type: String,
		Required: 'Please enter First name'
	},
	Lastname: {
		type: String,
		Required : 'Please enter Last name'
	},
	gender:{
		type: String,
		Required : 'Select gender'
	},
	course: {
		type: String,
		Required : 'Please enter course of study'
	},
	email: {
		type: String ,
		Required : 'Provide valid email address'
	},
	matric: {
		type : Number,
		Required : 'Provide matriculation number'
	},
	password :{
		type :String,
		Required : 'Please enter a password'
	},
	Created_date: {
		type : Date,
		default : Date.now
	}, 
});
module.exports = mongoose.model('Users', UserSchema);