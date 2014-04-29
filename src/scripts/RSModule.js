/**
 * @author Daniel
 */
define(["remoteStorage"], function(remoteStorage) {

    remoteStorage.defineModule("FRCScouting", function(privateClient, publicClient) {

        var teamClient = privateClient.scope("teams/");
        var eventClient = privateClient.scope("event/");

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

        eventClient.declareType("Event", {
            "description" : "An object representing a team",
            "type" : "object",
            "properties" : {
                "end_date" : {
                    "type" : "string"
                },
                "short_name" : {
                    "type" : "string"
                },
                "official" : {
                    "type" : "boolean"
                },
                "location" : {
                    "type" : "string"
                },
                "event_code" : {
                    "type" : "string"
                },
                "year" : {
                    "type" : "number"
                },
                "event_type_string" : {
                    "type" : "string"
                },
                "start_date" : {
                    "type" : "string"
                },
                "event_type" : {
                    "type" : "number"
                },
                "teams" : {
                    "type" : "array"
                }
            }
        });

        return {
            exports : {
                init : function() {
                    privateClient.cache('');
                },
                listTeams : function() {
                    return teamClient.getAll("");
                },
                listEvents : function() {
                    return eventClient.getAll("");
                },
                addEvent : function(id, data) {
                    return eventClient.storeObject('Event', id, data);
                }
            }
        };
    });

    remoteStorage.access.claim("FRCScouting", "rw");
});
