var app = angular.module('dogParks', ['ngRoute', 'ngAnimate'/*, 'express', 'ejs' */]);

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

});

