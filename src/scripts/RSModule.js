/**
 * @author Daniel
 */
define(["remoteStorage"], function(remoteStorage) {

    remoteStorage.defineModule("FRCScouting", function(privateClient, publicClient) {
        
        var TeamClient = privateClient.scope("teams");
        
        // Define a common data type using JSON Schema
        privateClient.declareType("Team", {
            "description" : "An object representing a team",
            "type" : "object",
            "properties" : {
                "number" : {
                    "type" : "number"
                },
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
                        },
                        "location" : {
                            "type" : "string"
                        },
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
                // Add functions for retrieving and manipulating data using
                // methods provided by BaseClient
                addTask : function(title) {
                    var id = new Date().getTime().toString();
                    return privateClient.storeObject('task', id, {
                        id : id,
                        title : title,
                        completed : false
                    });
                }
                // define more functions...
            }
        };
    });

    remoteStorage.access.claim("FRCScouting", "rw");
});
