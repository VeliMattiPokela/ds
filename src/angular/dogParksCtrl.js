app.controller('dogParksCtrl', function($rootScope){

    var vm = this;
    vm.testikutsu = 'Tämä js tulee läpi';

    // Navigaation menu-toggle //
    $rootScope.activeSideMenu = false;

    $rootScope.openSideMenu = function(){
        console.log('avaa menu');
        $rootScope.activeSideMenu = !$rootScope.activeSideMenu;
    };

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