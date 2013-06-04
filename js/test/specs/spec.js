// Jasmine Unit Testing Suite
// --------------------------
define(["jquery", "backbone", "views/Tree","collections/Collection", "jasminejquery"],

    function($, Backbone,  View, Collection) {

        // Test suite that includes all of the Jasmine unit tests   
        describe("Backbone Tree", function() {


		// Backbone Collection Suite: contains all tests related to collections
		describe("Backbone collections", function() {

		    // Runs before every Collection spec
		    beforeEach(function() {
			// Instantiates a new Collection instance
			this.collection = new Collection();

		    });

		    it("should contain the correct number of models", function() {
			var collection = this.collection,result;
			getCollection();

			waitsFor(function() {
				return result === true;
			}, "to retrive all nodes from json", 3000);

			runs(function() {
				expect(collection.length).toEqual(1);
			});

			function getCollection() {
				collection.fetch({
					success : function(){
						result = true;
					},
					error : function () {
						result = false;
					}
				});
			}

		    });

		}); // End of the Collection test suite

		// Tree render Suite: contains all tests related to tree render
		describe("Tree render", function() {
		    // Runs before every Collection spec
		    beforeEach(function() {
			var json = [{"id":"node-id","title":"node 1","name":"node_1","expand":true,"children":[{"id":"leaf-1","title":"leaf 1","name":"leaf_1"},{"id":"leaf-2","title":"leaf 2","name":"leaf_2"},{"id":"leaf-3","title":"leaf 3","name":"leaf_3"}]}];
			this.view = new View({data:json});
			this.view.render();
		    });

		    it("should contain the non checked items", function() {
			expect(this.view.getCheckedItems().length).toEqual(0);
		    });

		    it("should contain four checkbox input fields", function() {
			expect(this.view.$el.find('input[type="checkbox"]').length).toEqual(4);
		    });

		    it("first node's ul tag should contain show class and span tag should contain expand class", function() {
			var ul = $(this.view.$el.find('ul'))
			, span = ul.prev('span');
			expect(ul.hasClass('show')).toBeTruthy();
			expect(span.hasClass('expand')).toBeTruthy();
		    });

		}); // End of the Tree render test suite

        }); // End of the Backbone tree test suite

});
