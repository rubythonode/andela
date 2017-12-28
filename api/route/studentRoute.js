'use strict';

	var express = require('express'),
	mongoose = require('mongoose');
	var User = mongoose.model('Users');

module.exports = function(app){
	//create route
	app.route('/users' ).get(function (req, res) {
		User.find({}, function (err, user){
			if (err)
				res.send(err);
			res.json(user);
		});
	}).post(function (req, res){
		var new_user = new User(req.body);
		new_user.save(function(err, user){
		if (err)
			res.send(err);
			res.json({message: "success"});
		});
	});
	
	//edit route
	app.route('/users/:id').post(function(req, res){
		let query = {id:req.params.id}
		User.findByIdAndUpdate(query, function (err, user){
			if (err) {
				console.error('error, no entry found !');
			}
			user.save(function(err, user){
		if (err)
			res.send(err);
			res.json({message :"user updated"});
			});
		});
	});

	//delete route
	app.route('/users/:id').delete(function(req, res){
		let query = {id:req.params.id}
		User.remove(query,function(err){
			if (err) {
				console.log(err);
			}
			res.json({message :"user deleted"});
		});	
	});
};