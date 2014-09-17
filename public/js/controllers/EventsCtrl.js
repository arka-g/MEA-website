angular.module('EventsCtrl', []).controller('EventsController', function($scope) {
	$scope.welcome='Check out our upcoming and past events!';
	$scope.subHead="We don't bite";

	$scope.upcoming='Upcoming Events';
	$scope.past='Past Events';

	$scope.Eventhead1='First General Meeting';
	$scope.Eventhead2='Web Dev. Workshop';
	$scope.Eventhead3='Guest Speaker';

	$scope.infoEvent1 = 'When: September 29, 2014';
	$scope.subinfoEvent1 = 'Where: ETB 500';
	$scope.timeEvent1 = 'Time: 5pm';
    $scope.infoEvent2 = 'When: October 18, 2014';
    $scope.subinfoEvent2 = 'Where: 1280 Bar & Grill';
    $scope.timeEvent2 = 'Time: 7pm';
    $scope.infoEvent3 = 'When: November 8, 2014';
    $scope.subinfoEvent3 = 'Where: ETB 550';
    $scope.timeEvent3 = 'Time: 5pm';

});