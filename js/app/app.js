var rpRetailerApp = angular.module('rpRetailerApp', [], null);

rpRetailerApp.config(function ($routeProvider) {
    $routeProvider
        .when(
        '/',
        {
            controller: 'HomeController',
            templateUrl: 'home.tpl.html'
        })
        .otherwise({redirectTo: '/'});
});