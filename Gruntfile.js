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
                dest : 'build/styles/',
                ext : '.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['less']);

};
