angular.module('EventsCtrl', []).controller('EventsController', function($scope) {
	$scope.welcome='Check out our upcoming and past events!';
	$scope.subHead="We don't bite";

	$scope.upcoming='Upcoming Events';
	$scope.past='Past Events';

	$scope.Eventhead1='First General Meeting';
	$scope.Eventhead2='10 Steps to Starting a Business';
	//$scope.subEventhead2 = 'Presented by: SBEC (Small Business Enterprise Center)';
	$scope.Eventhead3='WordPress-ing Like a Boss';

	$scope.infoEvent1 = 'When: September 30, 2014';
	$scope.subinfoEvent1 = 'Where: ETB 533';
	$scope.timeEvent1 = 'Time: 5:30pm - 7:00pm';

    $scope.infoEvent2 = 'When: October 16, 2014';
    $scope.subinfoEvent2 = 'Where: ETB 535';
    $scope.timeEvent2 = 'Time: 5:30pm - 7:00pm';

    $scope.infoEvent3 = 'When: Mid October';
    $scope.subinfoEvent3 = 'Where: TBD';
    $scope.timeEvent3 = 'Time: TBD';

    $scope.twitter='https://twitter.com/McMasterEntreps';
  	$scope.facebook='https://www.facebook.com/MacEntrepreneurship';
  	$scope.email='mcmasterentrepreneurship@gmail.com';

});