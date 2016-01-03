var app = angular.module('dogParks', ['ngRoute', 'ngAnimate']);

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


app.controller('dogParksCtrl', function($rootScope){

    var vm = this;
    vm.testikutsu = 'Tämä js tulee läpi';

    // Navigaation menu-toggle //

    $rootScope.showDropdownMenu = false;

    $rootScope.openSideMenu = function(){
        $rootScope.activeSideMenu = !$rootScope.activeSideMenu;
        event.stopPropagation();
    };

    window.onclick = function() {
        if ($rootScope.activeSideMenu) {
            $rootScope.activeSideMenu = false;
            $rootScope.$apply();
        }
    };


    // Puistojen selailuun tarkoitettu toggle-dummy //
    vm.kumpula = true;
    vm.vallila = false;

    vm.nextPark = function(){
        vm.kumpula = !vm.kumpula;
        vm.vallila = !vm.vallila;
    };



});