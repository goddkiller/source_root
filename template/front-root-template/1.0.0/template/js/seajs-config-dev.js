seajs.config({
	alias:{
		'$':'front/libs/1.0.0/jquery.js',
		'_t':'front/libs/1.0.0/mustache.js',
		'_':'front/libs/1.0.0/underscore.js',
		'_b' : 'front/libs/1.0.0/backbone.js',
		'bootstrap' : 'front/libs/1.0.0/bootstrap/js/bootstrap.min.js',
		'chosen' : 'front/libs/1.0.0/chosen/chosen.jquery.js',
		'components' : 'front/components/1.0.0/all.js',
		'zTree' : 'front/libs/1.0.0/zTree/jquery.ztree.all-3.4.min.js'
	},
	preload: ['seajs/plugin-text']
});