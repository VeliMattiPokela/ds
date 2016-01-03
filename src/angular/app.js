var app = angular.module('dogParks', ['ngRoute', 'ngAnimate', 'ngTouch']);

app.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'parkListing.html'
        })

        .when('/parkKumpula', {
            templateUrl: 'parkDetails/kumpulaDetails.html'
        })

        .when('/parkVallila', {
            templateUrl: 'parkDetails/vallilaDetails.html'
        })
        .when('/favoriteParks', {
            templateUrl: 'favoriteParkList.html'
        })
        .when('/profilePage', {
            templateUrl: 'profilePage.html'
        })
        .when('/savedDogs', {
            templateUrl: 'savedDogs.html'
        })



});

