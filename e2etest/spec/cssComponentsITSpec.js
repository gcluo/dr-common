var helper = require('@dr/e2etest-helper');

describe('dr-css-components', ()=> {
	helper.setup(); // must call this to initialize WebDriver
	beforeAll(helper.waitForServer);

	describe('when access index page', ()=> {
		it('font file should be able to be downloaded', (done)=> {
			helper.statusCodeOf('/')
			.then(statusCode => {
				expect(statusCode).toBe(200);
				done();
			})
			.catch(e => {
				done.fail(e);
			});
		});
	});
});
