angular.module("app", ['ui.router', 'home', 'add', 'edit', 'delete'])
.config(function() {})
.controller('IndexController', function($state) {
                        console.log("welcome to Index controller");
                        $state.go('home');
});


//$urlRouterProvider, $httpProvider, $locationProvider