const swApp = angular.module('swApp', ['ngRoute']);

swApp.config(function($routeProvider) {
    $routeProvider.when('/favorites', {
        templateUrl: '/views/favorites.html',
        controller: 'FavoritesController as vm'
    }).when('/search', {
        templateUrl: '/views/search.html',
        controller: 'SearchController as vm'
    }).otherwise({
        redirectTo: '/home'
    })
});