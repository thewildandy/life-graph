'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configure tasks
  grunt.initConfig({

    // Project settings
    project: {
      app: 'app'
    },

    // Watch files and execute tasks when they change
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= project.app %>/*.html'
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
          open: true,
          base: '<%= project.app %>'
        }
      }
    },

    wiredep: {
      app: {
        src: ['<%= project.app %>/index.html']
      }
    }
  });

  grunt.registerTask('serve', ['wiredep', 'connect:livereload', 'watch']);
};