angular.module('myApp').service('chartService', function (mainService) {
    console.log('chartService added');

    var service = {};

    service.drawChart = function () {
        var selected = mainService.selected;
        // console.log(mainService.selected);
        return 'drawing chart for' + selected;
    };

    return service;
});