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
        remoteStorage : "remotestorage/remotestorage.amd"
    },
    shim : {
        bootstrap : {
            deps : ["jquery"]
        },
        angular : {
            exports: "angular"
        }
    },
    //init modules
    deps:["bootstrap", "angular", "app/main"]
});
