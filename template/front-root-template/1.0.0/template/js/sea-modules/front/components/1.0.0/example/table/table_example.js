define(function(require, exports, module) {
	var table = require("table");
	var tableTpl = require("./table_example.tpl");
	var table = window.table = new table({
		model: {
			fields: ["a", "b"],
			headMap: {
				a: "第一列",
				b: "第二列"
			},
			formatter: {
				a : function (item, field, items, i, j) {return "change a to " + item}
			}
		},
		template: tableTpl,
		el: $("#view")
	});
	table.model.url = function () {
		var page = 
		return "./table.json?page=" + this.model.get("pageNum");
	}

	table.model.parse = function (json) {
		return json
	}
	table.model.fetch();
	table.model.on("error", function () {
		console.log(arguments)
	})
})