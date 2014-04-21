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
        remoteStorage : "remotestorage/remotestorage.amd"
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
    deps : ["bootstrap", "ngRoute", "ngResource", "app/main"]
});
