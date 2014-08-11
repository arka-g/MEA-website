angular.module('EventsCtrl', []).controller('EventsController', function($scope) {
	$scope.welcome='Check out our upcoming and past events!';
	$scope.subHead="We don't bite";

	$scope.upcoming='Upcoming Events';
	$scope.past='Past Events';
});