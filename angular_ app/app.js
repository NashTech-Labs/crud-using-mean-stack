angular.module("app", ['ui.router', 'home', 'add', 'edit', 'delete'])
	.config(function() {})
	
	.controller('IndexController', function($state) {
		                     	$state.go('home');
});