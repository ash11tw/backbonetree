
define(["jquery", "backbone","underscore", "text!templates/tree.html"],

    function($, Backbone, _, treeTempl){
	var View = Backbone.View.extend({
		initialize: function(config) {
			_.extend(this,config)
		},
		events:{
			"click span":'treeTrigger'
			, 'click input[type="checkbox"]':'checkTrigger'
		},
		treeTrigger:function(e){
			e.stopImmediatePropagation()
			var target = e.currentTarget
			, ul = $(target).next('ul')
			$(target).toggleClass('expand')
			if (ul){
				ul.toggleClass('show')
			}
		},
		checkTrigger:function(e){
			e.stopImmediatePropagation()
			var target = e.currentTarget
			, checked = target.checked
			, span = $(target).parents('span:not(.leaf)')
			, ul = span.next('ul')
			if (ul){
				//the tree will be expaned when associated items get checked by default
				ul.removeClass().addClass('show')
				span.removeClass().addClass('expand')
				ul.find('ul').removeClass().addClass('show')
				ul.find('span:not(.leaf)').removeClass().addClass('expand')
				if (checked){
					ul.find('input[type="checkbox"]').prop('checked',true)
				}else {
					ul.find('input[type="checkbox"]').prop('checked',false)
				}
				
			}
		},
		getCheckedItems:function(){
			var out = []
			this.$el.find('input:checked').each(function(){
				var v = $(this).val()
				if (v){
					out.push(v)
				}
			})
			return out
		},
		render:function(){
			var me = this
			me.template = _.template(treeTempl)
			me.$el.html(me.template({"folders":me.data,"templateFn":me.template}))
			return me
		}
	})
	return View	

    }

)
