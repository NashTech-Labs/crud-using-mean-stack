angular.module("home", []).config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: "home/home.tpl",
        controller: "HomeController",
        
        resolve: {
            data: ['$http', function($http,Constants) {
                  return  $http.get('http://10.0.0.8:8090/employeelist');
            }]
        }

    });
}).controller("HomeController", function(data,$scope,$rootScope) {

    
    // $scope.edit=function(index){
    //     // alert("edit called");
    //     console.log("function called",index);
    //     $state.go("edit({'index':index})")
    // };
    console.log("inside Homecontroller");
    console.log("data list from resolve",data);
    // $scope.record=data.data.data;
    $rootScope.record=data.data.data;


     
    // urltobe run: http://127.0.0.1:8000/#/home
    // return  $http.get('http://10.0.0.8:8090/employeelist');

});
