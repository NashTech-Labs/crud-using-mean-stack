
angular.module('app').factory('AddService',function($http,$q){
	return{
		saveEmployee:function(employee){
			 var deferred = $q.defer();

		$http.post('http://localhost:9090/addemployee',{employee : employee},{
				headers:{
					'Content-Type' : 'application/json; charset=UTF-8'
				}
			}).success(function(){
				deferred.resolve('successful');
			}).error(function(){
				deferred.reject('ERROR');
			});
			return deferred.promise;			
		},


		updateEmployee:function(employee){
			 var deferred = $q.defer();
			$http.post('http://localhost:9090/editemployee',{employee : employee},{
				headers:{
					'Content-Type' : 'application/json; charset=UTF-8'
				}
			}).success(function(){
				deferred.resolve('successful');
			}).error(function(){
				deferred.reject('ERROR');
			});
			return deferred.promise;	
		},
		
		deleteEmployee:function(employee){
				 var deferred = $q.defer();
			$http.delete('http://localhost:9090/deleteemployee/'+employee,{},{
				headers:{
					'Content-Type' : 'application/json; charset=UTF-8'
				}
			}).success(function(){
				deferred.resolve('successful');
			}).error(function(){
				deferred.reject('ERROR');
			});
			return deferred.promise;	
		}

	}
})



