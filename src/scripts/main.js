/**
 * @author Daniel
 */

define(["angular","remoteStorage"], function (angular,remoteStorage) {
    angular.module("main",["ngRoute"]);
    
    angular.element(document).ready(function() {
      angular.bootstrap(document, ["main"]);
    });
});
