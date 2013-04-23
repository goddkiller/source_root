###列表组件(table)

####简单的例子:

#####引入table

	var table = require("table");

#####实例化table

	var table = new table({
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

model: 为列表的数据模型;

model.fields: 列表的表头id

model.headMap: 表头对应的表头名

model.formatter: 对每一个单元格输出时，都会执行这个函数，把这个函数的返回值当做单元格的内容;

template: 列表的view模板，如果想要不同于默认的表格模板展示，可自己指定（模板可以参考table.tpl）

el: 列表在页面上所承载的元素，用于页面渲染

#####列表内容格式

参考table.json

	{
		"itemList": [{
			"a": 1,
			"b": 1
		}, {
			"a": 2,
			"b": 2
		}],
		"pageCount": 254,
		"pageNum": 1,
		"pageSize": 20
	}

itemList: 列表的内容

列表内容json可以在构造时放在model.itemList来制定，也可以通过ajax来异步的获取。

#####通过ajax来获取列表内容和实现分页

	table.model.url = function () {
		return "./table.json?page=" + this.get("pageNum");
	}

需要指定ajax的url地址。如果返回的json内容与标准(参见上面的table.json)的不同，可以通过table.model.parse来做适配
	
	table.model.parse = function (json) {
		// 做格式转化的工作
		return json
	}

#####改变列表中的某个数据

列表中的所有东西都可以通过改变model的值来改变，例如：

	table.model.set("pageNum", 10) //翻页到10，会自动的发起ajax去请求数据


	

