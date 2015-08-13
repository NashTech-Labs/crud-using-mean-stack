
angular.module("home", []).config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: "home/home.tpl",
        controller: "HomeController",
        
        resolve: {
            data: ['$http', function($http) {
                  return  $http.get('http://localhost:9090/employeelist');
            }]
        }
});
}).controller("HomeController", function(data,$scope,$rootScope) {
    $rootScope.record=data.data.data;
});
