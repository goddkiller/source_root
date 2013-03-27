/**
 * @author Administrator
 */

define(function(require, exports, module) {
	var tableTpl = require("./table.html");
	var Model =  Backbone.Model.extend({
		getData : function () {
			var json = this.toJSON();
			var itemList = [];
			var othis = this;
			json.head = [];
			_.each(json.fields, function (field, i) {
				json.head[i] = json.headMap[field];
			});
				
			_.each(json.itemList, function (item, j) {
				var tmp_item = [];

				_.each(json.fields, function (field, i) {
					var format = othis.formatter[field];
					tmp_item.push(format ? format(item[field], field, item, i, j) : item[field]);
				});
				itemList.push(tmp_item);	
			});	
			if (json.pageCount > 0) {
				
				json.pages = [];
				json.pageNum = json.pageNum - 0;
				var startNum = (json.pageNum - 2 >= 1) ? json.pageNum - 2 : 1;
				var end = startNum + 4;
				if (json.pageNum + 2  >= json.pageCount) {
					end = json.pageCount;
				}
				
				for (var i = startNum; i <= end; i++) {
					json.pages.push({
						index:i, 
						"class": i == json.pageNum ? "active" : ""
					});
				}
				json.prevNum = json.pageNum - 1;
				json.nextNum = json.pageNum + 1;
				json.prevNum < 1 && (json.prevNum = 1);
				json.nextNum > json.pageCount && (json.nextNum = json.pageCount);
			}	
			json.itemList = itemList;
			return json;
		},
		formatter : {},
		initialize : function () {
		}
	})

	var TableView = Backbone.View.extend({
	
		className : "mv-table",	
	    template: tableTpl,
	
	    events: {
	    	"click .pagination a" : "goPage"
	    },
	
	    initialize: function() {
	        this.model.on('change', this.render, this);
	        this.render();
	    },
	
	    render: function() {
	        $(this.el).html(_t.render(this.template, this.model.getData()));
	        return this;
	    },

	    goPage : function (evt) {
	    	evt.preventDefault();
	    	var el = $(evt.target);
	    	var pageNum = el.attr("data");
	    	this.model.pageNum = pageNum;
	    	this.model.fetch();
	    }
	});
	var table = function (opt) {
		opt = opt || {};
		
		var model = new Model(opt.model || []);
		opt.model = model;
		var view = new TableView(opt);
		return view;
	};
	module.exports = table;
});

