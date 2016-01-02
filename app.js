/**
 * Created by sjeet on 12/28/2015.
 */

var flight = angular.module('flightModule', []);
flight.controller('flightController', function($scope, $http)
{
    $http({method: 'POST', url: 'sample1.json'}).success(function (response)
    {
        $scope.members = response.Airline;
    });
});;