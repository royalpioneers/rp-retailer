angular.module('rpRetailerApp').directive('rpCarouselHome', function() {
    return {
        restrict: 'A',
        scope: {'image': '='},
        link: function(scope, elm) {
            elm.carousel({
                interval: 2000 // in milliseconds
            });
        }
    }
});

