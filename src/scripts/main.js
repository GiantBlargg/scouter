/**
 * @author Daniel
 */
define(["angular", "remoteStorage", "ngRoute", "app/RSModule"], function(angular, remoteStorage) {
    angular.module("main", ["ngRoute"]).config(function($routeProvider) {
        $routeProvider.when("/dash", {
            templateUrl : "views/dash.html"
        }).when("/events", {
            controller : "EventList",
            templateUrl : "views/list.html"
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
    });

    angular.element(document).ready(function() {
        angular.bootstrap(document, ["main"]);
    });

    remoteStorage.displayWidget("login");
});
