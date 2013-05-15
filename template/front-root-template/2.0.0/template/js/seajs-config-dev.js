seajs.config({
	plugins: ['shim'],
	alias: {
		'$': {
			src: 'lib/jquery.min.js',
			exports: '$'
		},

		'_': {
			src: 'lib/underscore.min.js',
			exports: '_'
		},

		'_b': {
			src: 'lib/backbone.js',
			deps: ['_', '$'],
			exports: 'Backbone'
		},

		'_t': {
			src: 'lib/mustache.js',
			exports: 'Mustache'
		},

		'bootstrap': {
			src: 'lib/bootstrap/js/bootstrap.js',
			deps: ['$'],
			exports: 'bootstrap'
		},
		//'bootstrap' : 'front/libs/1.0.0/bootstrap/js/bootstrap.min.js',
		'chosen' : 'front/libs/1.0.0/chosen/chosen.jquery.js',
		'table' : 'front/components/1.0.0/table/table.js',
		'datepicker' : 'front/components/1.0.0/datepicker/js/datepicker.js',
		'zTree' : 'front/libs/1.0.0/zTree/jquery.ztree.all-3.4.min.js',
		'components' : 'lib/components/all.js'
	},
	preload: ['seajs/plugin-text', 'seajs/plugin-components']
})







