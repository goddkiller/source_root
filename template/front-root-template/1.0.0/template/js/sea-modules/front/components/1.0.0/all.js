define(function(require, exports, module) {
	var components = {};
	window.Mustache = window._t = require('_t');
	require("_b");

	
    require('bootstrap')();
      // require('zTree')();
      // require('chosen')();
	components.table = require("./table.js");
    // add your code
    module.exports = components;
	
});