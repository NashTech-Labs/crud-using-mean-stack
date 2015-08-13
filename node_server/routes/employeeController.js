var mongoose = require('mongoose');
var employeeCollection = require('../model/employeeModel.js');
var ObjectId = require('mongoose').Types.ObjectId


exports.employeeListMethod =  function(req, res){
	console.log("here");
		employeeCollection.employeeList({}, {}, function(err, listData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				res.send({'status' : 'success',  'data': listData});	
		}
		
	});
}

exports.employeeAddMethod = function(req, res){

console.log(req.body.employee);
			var data = {
			    "name" : req.body.employee.name,
			    "occupation" : req.body.employee.occupation,
			    "gender" : req.body.employee.gender,
			    "age" : req.body.employee.age

			}

employeeCollection.employeeAdd(req.body.employee, function(err, listDataResult){
		
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
			console.log("listdatal");
				console.log(listDataResult);
				res.send({'status' : 'success',  'data': listDataResult});	
		}
		
	});

}

exports.employeeEditMethod  =  function(req, res){
		console.log("dfdfdf"+JSON.stringify(req.body));
		var employee = {
					"_id" : ObjectId(req.body.employee._id),
					"name" : req.body.employee.name,
					"occupation" : req.body.employee.occupation,
					"gender":req.body.employee.gender,
					"age":req.body.employee.age
		}
		employeeCollection.employeeEdit({"_id": ObjectId(req.body.employee._id)}, employee, function(err, listData){
		
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				console.log(listData);
				res.send({'status' : 'success',  'data': listData});	
		}
		
	});
}

exports.employeeDeleteMethod  =  function(req, res){
	employeeCollection.employeeDelete({'_id': ObjectId(req.params._id)},function(err, listData){
		if(err){
				res.send({'status' : 'Error',  'data': err});
		}
		else{
				console.log(listData);
				res.send({'status' : 'success',  'data': listData});	
		}
		
	});
}


	




	
