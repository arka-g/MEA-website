angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/events', {
			templateUrl: 'views/events.html',
			controller: 'EventsController'	
		})

		.when('/team', {
			templateUrl: 'views/team.html',
			controller: 'TeamController'	
		})

		.when('/offtherecord',{
			templateUrl: 'views/offtherecord.html',
			controller: 'OTRController'
		})

		// .when('/getinvolved', {
		// 	templateUrl: 'views/getinvolved.html',
		// 	controller: 'GetInvolvedController'	
		// });

	$locationProvider.html5Mode(true);

}]);