/**
 * @author Daniel
 */

define(function() {
    return function(d) {
        var l = [];

        for (var type in d) {
            l.push({
                'key' : type,
                'hash' : d[type]
            });
        }
        return l;
    };
});
