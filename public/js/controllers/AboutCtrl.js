angular.module('AboutCtrl', []).controller('AboutController', function($scope) {

	$scope.tagline="The best Association at McMaster University with the most rad members";

	$scope.list1a='We aim to become the centralized hub of entrepreneurship and startup activities at McMaster';
	$scope.list1b='Provide the tools needed to succeed in entrepreneurial ventures:';

	$scope.sub1d='New connections & Networks';
	$scope.sub1b='Collaboration with other entrepreneurs';
	$scope.sub1c='Information';
	$scope.sub1a='Funding';

	$scope.list2a='Learn about and get involved in the Hamilton Area Startup Community';
	$scope.list2b='Attend events and conferences about entrepreneurship (ex: NSpire) for free!';
	$scope.list2c='Attend Startup Weekends for free and develop your own ideas';
	$scope.list2d='Open up more options after graduation';

	$scope.list3a='Get updates on new events';
	$scope.list3b='Become an active member';

	$scope.list4a='Get the word out there about your organization by working with us!';

    $scope.twitter='https://twitter.com/McMasterEntreps';
    $scope.facebook='https://www.facebook.com/MacEntrepreneurship';
    $scope.email='mcmasterentrepreneurship@gmail.com';	
});