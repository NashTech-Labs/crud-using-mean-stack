angular.module("add", []).config(function($stateProvider) {
    $stateProvider.state('add', {
        url: '/add',
        templateUrl: "add/add.tpl",
        controller: "AddController"

    });
}).controller("AddController", function($scope, AddService, $state) {

    $scope.employee = {};

    $scope.editMode=false;

    $scope.addEmployee = function(employee) {
        AddService.saveEmployee(employee);
        $scope.record.push(employee);
        alert("employee Added");
        $state.go('home');
    }

    console.log("inside Add controller");
});




