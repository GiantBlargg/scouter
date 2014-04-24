/**
 * @author Daniel
 */
define(["angular", "remoteStorage", "app/Object2Array", "ngRoute", "app/RSModule"], function(angular, remoteStorage, Object2Array) {
    angular.module("main", ["ngRoute"]).config(function($routeProvider) {
        $routeProvider.when("/dash", {
            templateUrl : "views/dash.html"
        }).when("/events", {
            controller : "EventList",
            templateUrl : "views/eventsList.html"
        }).when("/teams", {
            controller : "TeamsList",
            templateUrl : "views/teamList.html"
        }).otherwise({
            redirectTo : "/dash"
        });
    }).controller("nav", function($scope, $location) {
        $scope.path = function(path) {
            return $location.path().indexOf(path) > -1;
        };
    }).controller("EventList", function($scope, $location) {
        $scope.goTo = function(id) {
            $location.path('/events/' + id);
        };
        $scope.events = Object2Array({
            "2014abca" : {
                "end_date" : "2014-04-05",
                "short_name" : "Western Canada",
                "facebook_eid" : null,
                "official" : true,
                "location" : "Calgary, AB, Canada",
                "event_code" : "abca",
                "year" : 2014,
                "event_type_string" : "Regional",
                "start_date" : "2014-04-03",
                "event_type" : 0
            },
            "2013abca" : {
                "end_date" : "2013-04-06",
                "short_name" : "Western Canadian",
                "facebook_eid" : null,
                "official" : true,
                "location" : null,
                "event_code" : "abca",
                "year" : 2013,
                "event_type_string" : "Regional",
                "start_date" : "2013-04-04",
                "event_type" : 0
            }
        });
    }).controller("TeamsList", function($scope, $location) {
        $scope.goTo = function(id) {
            $location.path('/teams/' + id);
        };
        $scope.teams = Object2Array({
            "4606" : {
                "nickname" : "LARRY",
                "name" : "We are LARRY",
                "location" : {
                    "locality" : "Calgary",
                    "region" : "AB",
                    "country" : "CA"
                }
            },
            "5116" : {
                "nickname" : "Silicon Claymore",
                "name" : "Places that sponsor us",
                "location" : {
                    "locality" : "Calgary",
                    "region" : "AB",
                    "country" : "CA"
                }
            }
        });
    });
});
