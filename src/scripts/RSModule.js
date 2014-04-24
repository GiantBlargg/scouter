/**
 * @author Daniel
 */
define(["remoteStorage"], function(remoteStorage) {

    remoteStorage.defineModule("FRCScouting", function(privateClient, publicClient) {

        var teamClient = privateClient.scope("teams/");

        // Define a common data type using JSON Schema
        teamClient.declareType("Team", {
            "description" : "An object representing a team",
            "type" : "object",
            "properties" : {
                "nickname" : {
                    "type" : "string"
                },
                "name" : {
                    "type" : "string"
                },
                "location" : {
                    "type" : "object",
                    "properties" : {
                        "locality" : {
                            "type" : "string"
                        },
                        "region" : {
                            "type" : "string"
                        },
                        "country" : {
                            "type" : "string"
                        }
                    }
                },
                "website" : {
                    "type" : "string"
                },
                "events" : {
                    "type" : "array"
                }
            }
        });

        return {
            exports : {
                init : function() {
                    privateClient.cache('');
                },
                // Add functions for retrieving and manipulating data using
                // methods provided by BaseClient
                listTeams : function() {
                    return teamClient.getAll("");
                }
                // define more functions...
            }
        };
    });

    remoteStorage.access.claim("FRCScouting", "rw");
});