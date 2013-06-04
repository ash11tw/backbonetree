// TestInit.js
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "libs/jquery",

      "underscore": "libs/lodash.underscore",

      "backbone": "libs/backbone",

      "jasmine": "libs/jasmine",

      "jasmine-html": "libs/jasmine-html",

      // Plugins
      // -------

      "bootstrap": "libs/plugins/bootstrap",

      "text": "libs/plugins/text",

      "jasminejquery": "libs/plugins/jasmine-jquery",

      // Application Folders
      // -------------------
      "collections": "app/collections",

      "models": "app/models",

      "routers": "app/routers",

      "templates": "app/templates",

      "views": "app/views"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

      // Jasmine-jQuery plugin
      "jasminejquery": ["jquery"],


      // Backbone
      "backbone": {

          // Lists jQuery and Underscore as dependencies
          "deps": ["underscore", "jquery"],

          // Exports the global 'window.Backbone' object
          "exports": "Backbone"

      },


      // Jasmine Unit Testing
      "jasmine": {

        // Exports the global 'window.jasmine' object
        "exports": "jasmine"

      },

      // Jasmine Unit Testing helper
      "jasmine-html": {

        "deps": ["jasmine"],

        "exports": "jasmine"

      }

  }

});

// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "jasmine-html", "bootstrap"],

  function($, Backbone, jasmine) {

    specs = [];
 
    specs.push('test/specs/spec');
 
 
    $(function() {
    
      require(specs, function() {

        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());

        jasmine.getEnv().execute();

    
      });

    });

  }

);
