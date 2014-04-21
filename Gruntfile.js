module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        less : {
            options : {
                compress : true,
                cleancss : true,
                report : "min"
            },
            build : {
                expand : true,
                cwd : 'src/styles',
                src : '*.less',
                dest : 'build',
                ext : '.css'
            }
        },
        requirejs : {
            build : {
                options : {
                    baseUrl : "bower_components",
                    out : 'build/main.js',
                    mainConfigFile : "src/scripts/init.js",
                    name : "init"
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ["less", "requirejs"]);

};
