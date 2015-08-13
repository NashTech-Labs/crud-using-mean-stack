angular.module("edit", []).config(function($stateProvider) {
    $stateProvider.state('edit', {
        url: '/edit/:_id',
        templateUrl: "add/add.tpl",
        controller: "EditController"

    });
}).controller("EditController", function($scope, AddService, $state,$stateParams,$rootScope) {
    $scope.employee = AddService.getById($rootScope.record, $stateParams._id);

    $scope.editMode=true;

    $scope.updateEmployee = function(employee) {
        console.log('inside edit controller');
        console.log(employee);
        AddService.updateEmployee(employee).then(function(resolve){
           //$scope.record.push(employee);
             $state.go('home');
        }, function(reject){
            $state.go('home');
        });
       
        
    }
});





