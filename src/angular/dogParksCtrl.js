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

    // Slider-testi

    vm.slides = [
        {image: 'img/koirapuisto1.jpg', description: 'Image 00', name: 'Kumpulan koirapuisto', bgClass: 'puisto1', parkAddress: 'Koirapuistonkatu 1', distanceToPark: '2345', smallDogAmmount: '5', bigDogAmmount: '3', url: '#/parkKumpula'},
        {image: 'img/koirapuisto2.jpg', description: 'Image 01', name: 'Vallilan koirapuisto', bgClass: 'puisto2', parkAddress: 'Koirapuistonkatu 2', distanceToPark: '2345', smallDogAmmount: '4', bigDogAmmount: '2', url: '#/parkKumpula'},
        {image: 'img/koirapuisto3.jpg', description: 'Image 02', name: 'Kallion koirapuisto', bgClass: 'puisto3', parkAddress: 'Koirapuistonkatu 3', distanceToPark: '2345', smallDogAmmount: '1', bigDogAmmount: '8', url: '#/parkKumpula'}
    ];

    vm.currentIndex = 0;

    vm.setCurrentSlideIndex = function (index) {
        vm.currentIndex = index;
    };

    vm.isCurrentSlideIndex = function (index) {
        return vm.currentIndex === index;
    };

    vm.prevSlide = function () {
        vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
    };

    vm.nextSlide = function () {
        vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.slides.length - 1;
    };


});
