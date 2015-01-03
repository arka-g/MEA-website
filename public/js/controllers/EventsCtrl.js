angular.module('EventsCtrl', []).controller('EventsController', function($scope) {
	$scope.welcome='Check out our upcoming [2015] and past events!';
	$scope.subHead="We don't bite";

	$scope.upcoming='Upcoming Events for 2015!';
	$scope.past='Past Events';

	$scope.Eventhead1='Clubsfest!';
	$scope.Eventhead2='General Meeting';
	$scope.Eventhead3='Social Media Workshop';
	$scope.Eventhead4='Kickstarter Workshop';
	$scope.Eventhead5='Government Grants';
	$scope.Eventhead6='Website Workshop';
	$scope.Eventhead7='Food Startups';
	$scope.Eventhead8='Off The Record';

	$scope.infoEvent1 = 'When: January 7/8';
	$scope.subinfoEvent1 = 'Where: TBD';
	$scope.timeEvent1 = 'Time: TBD';

    $scope.infoEvent2 = 'When: January 13';
    $scope.subinfoEvent2 = 'Where: ETB 535';
    $scope.timeEvent2 = 'Time: 6pm - 8pm';

    $scope.infoEvent3 = 'When: January 20';
    $scope.subinfoEvent3 = 'Where: ETB 535';
    $scope.timeEvent3 = 'Time: 6pm - 8pm';

    $scope.infoEvent4 = 'When: February 3';
    $scope.subinfoEvent4 = 'Where: ETB 535';
    $scope.timeEvent4 = 'Time: 6pm - 8pm';

   	$scope.infoEvent5 = 'When: February 10';
    $scope.subinfoEvent5 = 'Where: ETB 535';
    $scope.timeEvent5 = 'Time: 6pm - 8pm';

 	$scope.infoEvent6 = 'When: March 3';
    $scope.subinfoEvent6 = 'Where: TBD';
    $scope.timeEvent6 = 'Time: TBD';

	$scope.infoEvent7 = 'When: March 10';
    $scope.subinfoEvent7 = 'Where: ETB 535';
    $scope.timeEvent7 = 'Time: 6pm - 8pm';

  	$scope.infoEvent8 = 'When: Weekly';
    $scope.subinfoEvent8 = 'Where: Starbucks/ Coffee Shop';
    $scope.timeEvent8 = 'Time: TBD. Sign up by clicking the icon above';

    $scope.twitter='https://twitter.com/McMasterEntreps';
  	$scope.facebook='https://www.facebook.com/MacEntrepreneurship';
  	$scope.email='mcmasterentrepreneurship@gmail.com';

});