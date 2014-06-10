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
    }
  });

  grunt.registerTask('serve', ['connect:livereload', 'watch']);
};