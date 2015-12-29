app.controller('dogParksCtrl', function(){

    var vm = this;
    vm.testikutsu = 'Tämä js tulee läpi';

    // Navigaation menu-toggle //
    vm.activeSideMenu = false;

    vm.openSideMenu = function(){
        console.log('avaa menu');
        vm.activeSideMenu = !vm.activeSideMenu;
    };


    // Puistojen selailuun tarkoitettu toggle-dummy //
    vm.kumpula = true;
    vm.vallila = false;

    vm.nextPark = function(){
        vm.kumpula = !vm.kumpula;
        vm.vallila = !vm.vallila;
    };



});