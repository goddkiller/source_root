seajs.use(['/js/{{root}}/src/{{name}}.js'], function ({{name}}) {
	ajaxRewrite();

	describe('{{name}}', function() {
        it('do something', function () {
            expect({{name}}).not.toBeNull();
        })
    });

    window.jasmine.getEnv().execute();
})

