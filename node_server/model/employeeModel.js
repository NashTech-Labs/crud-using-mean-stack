 //node module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var employeeSchema = mongoose.Schema({

    name : { type:String },
    occupation: { type:String },
    gender : { type:String },
    age : { type:Number }
  });

 var employees = mongoose.model('employees', employeeSchema);

 module.exports={
	//get all contents
	employeeList : function(condition, fields, callback){
		if(!fields)
			fields = {};
	employees.find(condition, fields, callback);
	},

	//update contenet
	employeeEdit : function(condition, data, callback){
		console.log("here");
		console.log(data)
		employees.update(condition, data, callback);
	},

	//save content
	employeeAdd : function(data, callback){
		console.log("data");
		console.log(data);
		new employees(data).save(callback);
	},

	employeeDelete :function(condition, callback){
		employees.remove(condition, callback);
	},
	schema : employees
}
