/**
 * @author Daniel
 */
define(["angular", "remoteStorage", "ngRoute"], function(angular, remoteStorage) {
    angular.module("main", ["ngRoute"]).config(function($routeProvider) {
        $routeProvider.when("/dash", {
            templateUrl : "views/dash.html"
        }).otherwise({
            redirectTo : "/dash"
        });
    });

    angular.element(document).ready(function() {
        angular.bootstrap(document, ["main"]);
    });
});
