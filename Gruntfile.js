module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-prettify');
  grunt.initConfig({
    prettify: {
      options: {
        // Task-specific options go here.
      },
      html: {
        '**/*.html': ['../scratchyone.github.io/*.html']
      }
    }
  });
grunt.registerTask("pretty", ["prettify"]);
};
