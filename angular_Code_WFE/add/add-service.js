
angular.module('app').factory('AddService',function($http){
	return{
		saveEmployee:function(employee){
			console.log("going to save employee",employee);
			$http.post('http://10.0.0.8:8090/addemployee',employee,{
				headers:{
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			})
		},
		updateEmployee:function(employee){
			console.log("going to update employee",employee.id);
			$http.put('http://10.0.0.8:8090/editemployee/'+employee.id,employee,{
				headers:{
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			})
		},

	}
})