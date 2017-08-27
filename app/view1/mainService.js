angular.module('myApp').service('mainService', function () {
    var service = {};

    service.list = ['1', '2', '3'];
    service.selected = '';

    service.drawSelected = function () {
        return service.selected + ' selected';
    };

    return service;
});
