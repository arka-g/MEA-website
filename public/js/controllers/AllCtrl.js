angular.module('MainCtrl', 'AboutCtrl', 'EventsCtrl', 'TeamCtrl' []).controller('MainController', 'TeamController','EventsController', 'AboutController', function($scope) { 
    $scope.twitter='https://twitter.com/McMasterEntreps';
    $scope.facebook='https://www.facebook.com/MacEntrepreneurship';
    $scope.email='mcmasterentrepreneurship@gmail.com';
});