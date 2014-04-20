/**
 * @author Daniel
 */

requirejs.config({
    baseUrl : 'scripts',
    paths : {
        lib : "../bower_components",
        jquery : "../bower_components/jquery/dist/jquery.min",
        bootstrap : "../bower_components/bootstrap/dist/js/bootstrap.min"
    },
    shim : {
        "bootstrap" : {
            deps : ["jquery"]
        }
    }
});

requirejs(['jquery', "bootstrap"], function() {
});
