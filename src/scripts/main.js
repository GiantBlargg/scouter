/**
 * @author Daniel
 */
define(["angular", "remoteStorage", "app/Object2Array", "ngRoute", "app/RSModule"], function(angular, remoteStorage, Object2Array) {
    angular.module("main", ["ngRoute", "ngResource"]).config(function($routeProvider) {
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
    }).controller("EventList", function($scope, $location, $resource, $filter) {
        $scope.$watchCollection('search', function(newVal) {
            $scope.filteredItems = $filter('filter')($scope.events, newVal);
        });
        $scope.goTo = function(id) {
            $location.path('/events/' + id);
        };
        $scope.pop = function(id) {
            for (i in $scope.remote) {
                event = $scope.remote[i];
                if (event.key == id) {
                    console.log(event);
                    remoteStorage.FRCScouting.addEvent(id, {
                            "end_date" : event.end_date,
                            "short_name" : event.short_name,
                            "official" : event.official,
                            "location" : event.location,
                            "event_code" : event.event_code,
                            "year" : event.year,
                            "event_type_string" : event.event_type_string,
                            "start_date" : event.start_date,
                            "event_type" : event.event_type,
                            "teams" : ["nothing"]
                        });
                    var teams = $resource("http://www.thebluealliance.com/api/v2/event/:id/teams", {
                        id : id,
                        "X-TBA-App-Id" : "frc5116:Scouter:0.0.0"
                    }).query(function() {
                        console.log(teams);
                        var t = [];
                        for (a in teams) {
                            team = teams[a];
                            if (team.team_number) {
                                t.push(team.team_number);
                            };
                        };
                        console.log(t);
                    });
                };
            };
        };
        $scope.remote = $resource("http://www.thebluealliance.com/api/v2/events/:year", {
            year : function() {
                return new Date().getFullYear();
            },
            "X-TBA-App-Id" : "frc5116:Scouter:0.0.0"
        }).query();
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
