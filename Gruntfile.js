module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 9001,
          hostname: 'localhost'
        }
      }
    },
    jshint: {
      options: {
        "maxerr": 50,
        "globals": {
          "angular": true
        }
      },
      files: {
        src: ['app/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('start', ['connect:server']);

};

