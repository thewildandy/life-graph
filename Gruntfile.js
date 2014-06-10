'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configure tasks
  grunt.initConfig({

    // Watch files and execute tasks when they change
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '*.html'
        ]
      }
    },

    // Grunt servers
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: true
      },
      livereload: {
        options: {
          open: true
        }
      }
    },

    wiredep: {
      app: {
        src: ['index.html']
      }
    }
  });

  grunt.registerTask('serve', ['wiredep', 'connect:livereload', 'watch']);
};