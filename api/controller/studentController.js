// 	'use strict';

// 	var express = require('express'),
// 	mongoose = require('mongoose');
// 	var User = mongoose.model('Users');
	
//  	exports.list_users = function (req, res) {
// 		User.find({}, function (err, user){
// 			if (err)
// 				res.send(err);
// 			res.json(user);
// 		});
// 	};

// 	exports.create_users = function (req, res){
// 		var new_user = new User(req.body);
// 		new_user.save(function(err, user){
// 		if (err)
// 			res.send(err);
// 		res.json(user);
// 		});
// 	};

// 	// exports.edit_users = function (req, res){
// 	// 	var user = {};

// 	// 	User.update(function(err,user){
// 	// 		if(err){
// 	// 			res.send(err);
// 	// 			res.json(user);
// 	// 	}
// 	// )};

// 	exports.delete_users = function(req,res){
// 		User.remove({
// 			id:req.params.id
// 		},function(err, user){
// 		if (err)
// 			return res.send(err);
// 		res.json({message :"user deleted"});
// 	});
// };
	
