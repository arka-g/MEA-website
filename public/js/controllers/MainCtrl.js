angular.module('MainCtrl', []).controller('MainController', function($scope) { 

	$scope.welcome='Welcome.';
	$scope.subHead = 'The innovator in you starts here!';

	$scope.join='Why Should You Join?';

	$scope.head1='Have an idea?';
	$scope.head2='Grow Your Network';
	$scope.head3='Learn';

    $scope.info1 = 'We can help bring your ideas to life by providing you with tools and funding';
    $scope.info2 = 'We provide access to many events with top entrepreneurs';
    $scope.info3 = 'We hold workshops that teach web design, pitching skills, and more';

    $scope.sponsor1='Xerox Centre for Entrepreneurship and Innovation';
    $scope.sponsor2='McMaster Industry Liaison Office';
    $scope.sponsor3='Imagination Plus';

    $scope.connect = 'Connect With Us'
});

