angular.module("delete", []).config(function($stateProvider) {
    $stateProvider.state('deleteEmployee', {
        url: '/delete/:index',
        templateUrl: "delete/delete.tpl",
        controller: "DeleteController"

    });
}).controller("DeleteController", function($scope, AddService, $state,$stateParams,$rootScope) {

    $scope.employee = $rootScope.record[$stateParams.index];
    $scope.editMode=false;

    $scope.deleteEmployee = function(employee) {
        AddService.deleteEmployee(employee).then(function(resolve){
           //$scope.record.push(employee);
             $state.go('home');
        }, function(reject){
            $state.go('home');
        });
        //$state.go('home');
        
    }
});