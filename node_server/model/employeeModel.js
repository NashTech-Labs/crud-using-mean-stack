 //node module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*Database Collection Schema*/
 var employeeSchema = mongoose.Schema({

    name : { type:String },
    occupation: { type:String },
    gender : { type:String },
    age : { type:Number }
  });

/*Instance of my collection*/
 var employees = mongoose.model('employees', employeeSchema);

/*Method that fire's Database Queries*/
 module.exports={
	//get all employees
	employeeList : function(condition, fields, callback){
		if(!fields)
			fields = {};
		
	employees.find(condition, fields, callback);
	},

	//update employee
	employeeEdit : function(condition, data, callback){
		employees.update(condition, data, callback);
	},

	//save employee
	employeeAdd : function(data, callback){
		new employees(data).save(callback);
	},

	//delete employee
	employeeDelete :function(condition, callback){
		employees.remove(condition, callback);
	},
	schema : employees
}
