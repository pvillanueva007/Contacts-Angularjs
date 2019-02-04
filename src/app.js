var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/contacts', {
        templateUrl :  'contacts.html',
        controller : 'contactsCtrl'
    })
    .when('/contact-details/:id', {
        templateUrl : 'contact-details.html',
        controller : 'contactDetailsCtrl'
    })
    
});