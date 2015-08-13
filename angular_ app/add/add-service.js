
angular.module('app').factory('AddService',function($http,$q){
	return{
		saveEmployee:function(employee){
			 var deferred = $q.defer();

			$http.post(config.serverUrl+config.create,{employee : employee},{
						headers:{
							'Content-Type' : 'application/json; charset=UTF-8'
						}
				})
				.success(function(){
						deferred.resolve('successful');
				})
				.error(function(){
						deferred.reject('ERROR');
				});
				return deferred.promise;			
		},


		updateEmployee:function(employee){
				var deferred = $q.defer();
				$http.post(config.serverUrl + config.update,{employee : employee},{
						headers:{
							'Content-Type' : 'application/json; charset=UTF-8'
						}
				})
				.success(function(){
						deferred.resolve('successful');
				})
				.error(function(){
						deferred.reject('ERROR');
				});
			
			return deferred.promise;	
		},
		
		deleteEmployee:function(employee){
			    var deferred = $q.defer();
				$http.delete(config.serverUrl + config.delete + '/' +employee,{},{
						headers:{
							'Content-Type' : 'application/json; charset=UTF-8'
						}
				})
				.success(function(){
		 				deferred.resolve('successful');
			    })
			    .error(function(){
						deferred.reject('ERROR');
				});
				
				return deferred.promise;	
		},

		getById: function(arr, id) {
    			for (var d = 0, len = arr.length; d < len; d += 1) {
        				if (arr[d]._id === id) {
            							return arr[d];
        				}
    			}
		}

	}
})



