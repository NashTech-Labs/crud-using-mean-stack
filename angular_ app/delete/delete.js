angular.module("delete", []).config(function($stateProvider) {
    $stateProvider.state('deleteEmployee', {
        url: '/delete/:_id',
        templateUrl: "delete/delete.tpl",
        controller: "DeleteController"

    });
}).controller("DeleteController", function($scope, AddService, $state,$stateParams,$rootScope) {

    $scope.employee = AddService.getById($rootScope.record, $stateParams._id);
    $scope.editMode=false;

    $scope.deleteEmployee = function(employee) {
        AddService.deleteEmployee(employee).then(function(resolve){
           //$scope.record.push(employee);
             $state.go('home');
        }, function(reject){
            $state.go('home');
        });
        
        
    }
});