angular.module("add", []).config(function($stateProvider) {
    $stateProvider.state('add', {
        url: '/add',
        templateUrl: "add/add.tpl",
        controller: "AddController"

    });
}).controller("AddController", function($scope, AddService, $state) {
    console.log("Inside Add Controller");
    $scope.employee = {};
    
    $scope.editMode=false;

    $scope.addEmployee = function(employee) {
        AddService.saveEmployee(employee).then(function(resolve){
           
           // $scope.record.push(employee);
             $state.go('home');
        }, function(reject){
             $state.go('home');
           
        });
        // 
    }

    
});




