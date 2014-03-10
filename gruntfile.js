module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-crx');

    grunt.initConfig({
      crx: {
        myPublicPackage: {
          "src": "src/",
          "dest": "dist/crx/slacklink.crx",
          "exclude": [ ".git" ],
          "privateKey": "key.pem"
        }
      }
    });

    grunt.registerTask('default', ['crx']);

};