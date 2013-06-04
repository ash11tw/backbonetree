
define(["jquery", "backbone", "collections/Collection","views/Tree","text!templates/index.html"],

    function($, Backbone, Collection,TreeView,indexTmpl){
	var View = Backbone.View.extend({
		el:'#main',
		initialize: function() {
			this.render()

		},
		render:function(){
			var me = this, collection = new Collection()
			me.template = _.template(indexTmpl)

                	me.$el.html(me.template)
			collection.fetch({success:function(data){
				me.subView = new TreeView({data:data.toJSON()})
				me.subView.setElement(me.$el.find('div.css-treeview > ul')).render()
				return me
			}})
		}
	})
	return View	

    }

)
