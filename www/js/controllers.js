angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('EventsCtrl', function($scope, MeetupApiService) {
  $scope.events = [];
  $scope.loaded = false;

  MeetupApiService.getEvents()
    .then(
      function(events) {
        $scope.events = events;
        $scope.loaded = true;
      }
    );
})

.controller('EventCtrl', function($scope, $stateParams, MeetupApiService) {
  $scope.event = {};
  $scope.loaded = false;

  MeetupApiService.getEvent($stateParams.eventId)
    .then(
      function(event) {
        $scope.event = event;
        $scope.loaded = true;
      }
    );
});