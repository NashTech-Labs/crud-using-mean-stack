angular.module("app", ['ui.router', 'home', 'add', 'edit']).config(function($urlRouterProvider, $httpProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        // $urlRouterProvider.otherwise( '' );


    })
    .controller('IndexController', function($state) {
        console.log("welcome to home controller");
        // $state.go('home');
    })



angular.module('app').constant('Constants', {
    APP_URL: '10.8.8.0:8090',
    AUTH_TOKEN_KEY: 'X-AUTH-TOKEN',
    CHANNEL: {
        USER_LOGIN: 'user'
    }
});
