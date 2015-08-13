angular.module("edit", []).config(function($stateProvider) {
    $stateProvider.state('edit', {
        url: '/edit/:index',
        templateUrl: "add/add.tpl",
        controller: "EditController"

    });
}).controller("EditController", function($scope, AddService, $state,$stateParams,$rootScope) {

    $scope.employee = $rootScope.record[$stateParams.index];

    $scope.editMode=true;

    $scope.updateEmployee = function(employee) {
        AddService.updateEmployee(employee);
        alert("employee Updated");
        $state.go('home');
        
    }

    console.log("inside Edit controller", $stateParams.index);
    // console.log($rootScope.employee[$stateParams])
});




