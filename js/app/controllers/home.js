angular.module('rpRetailerApp').controller('HomeController', function($scope) {
    $scope.$parent.hideTopNavBar = true;
    $scope.$parent.hideBottomNavBar = true;

    $scope.backgroundImages = [
        {src: 'img/background/bg-1.jpg', display: true},
        {src: 'img/background/bg-2.jpg', display: false},
        {src: 'img/background/bg-3.jpg', display: false}];

});


