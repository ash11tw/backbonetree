// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "views/Index"],
        
    function($, Backbone, Index) {

        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start()

            }

            // All of your Backbone Routes (add more)
            , routes: {
                
                // When there is no hash on the url, the home method is called
                "": "index"

            }

            , index: function() {
		new Index()

            }
    
        })

        // Returns the DesktopRouter class
        return DesktopRouter

    }

)
