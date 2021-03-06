/**
 * @author Daniel
 */

requirejs.config({
    baseUrl : '../bower_components',
    paths : {
        app : "../src/scripts",
        jquery : "jquery/dist/jquery.min",
        bootstrap : "bootstrap/dist/js/bootstrap.min",
        angular : "angular/angular.min",
        ngRoute : "angular-route/angular-route.min",
        ngResource : "angular-resource/angular-resource.min",
        remoteStorage : "../src/scripts/remotestorage.amd.test"
    },
    shim : {
        bootstrap : {
            deps : ["jquery"]
        },
        angular : {
            exports : "angular"
        },
        ngRoute : {
            deps : ["angular"]
        },
        ngResource : {
            deps : ["angular"]
        }
    },
    //init modules
    deps : ["bootstrap", "ngResource", "app/main"]
});
requirejs(["angular", "remoteStorage", "bootstrap", "ngResource", "app/main"], function(angular, remoteStorage) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["main"]);
        remoteStorage.FRCScouting.init();
        remoteStorage.displayWidget("login");
    });
});
