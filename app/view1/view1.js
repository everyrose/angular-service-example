'use strict';

angular.module('view1', ['ngRoute'])
    .controller('View1Controller', function ($scope, $timeout, mainService, chartService) {
        $scope.portfolios = mainService.list;

        $scope.update = function () {
            console.log('scopeupdate');
            mainService.selected = $scope.selectedItem;
            // $timeout(function () {
            //     console.log('timeout');
            //     service.selected = 4;
            // },400);

            // setTimeout(function () {
            //     console.log('timeout');
            //     chartService.selected = 4;
            //     $scope.$apply();
            // },400)
            chartService.drawChart();
        };

        $scope.chart = chartService.drawChart;
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html'
        });
    }]);

