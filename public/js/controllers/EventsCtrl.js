angular.module('EventsCtrl', []).controller('EventsController', function($scope) {
	$scope.welcome='Check out our upcoming and past events!';
	$scope.subHead="We don't bite";

	$scope.upcoming='Upcoming Events';
	$scope.past='Past Events';

	$scope.Eventhead1='Idea Validation Workshop';
	$scope.Eventhead2='WordPress-ing Like a Boss';
	//$scope.subEventhead2 = 'Presented by: SBEC (Small Business Enterprise Center)';
	$scope.Eventhead3='Off The Record';

	$scope.infoEvent1 = 'When: November 11, 2014';
	$scope.subinfoEvent1 = 'Where: TBD';
	$scope.timeEvent1 = 'Time: TBD';

    $scope.infoEvent2 = 'When: Mid November';
    $scope.subinfoEvent2 = 'Where: ETB 535';
    $scope.timeEvent2 = 'Time: TBD';

    $scope.infoEvent3 = 'When: Weekly';
    $scope.subinfoEvent3 = 'Where: Starbucks/ Coffee Shop';
    $scope.timeEvent3 = 'Time: TBD. Sign up by clicking the icon above';

    $scope.twitter='https://twitter.com/McMasterEntreps';
  	$scope.facebook='https://www.facebook.com/MacEntrepreneurship';
  	$scope.email='mcmasterentrepreneurship@gmail.com';

});