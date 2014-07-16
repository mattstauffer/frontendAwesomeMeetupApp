angular.module('starter.services', [])

.service('MeetupApiService', function($filter, $http, $q) {
    var baseUrl = 'http://meetup.superfriends.co/api/';

    return {
        getEvents: function() {
           return $http
                .get(baseUrl + 'meetup/events', { cache: true })
                .then(function(response) {
                  return response.data.results;
                });
        },
        getEvent: function(eventId) {
            return $http
                .get(baseUrl + 'meetup/events/' + eventId, { cache: true })
                .then(function(response) {
                  return response.data;
                });
        }
    };
});
