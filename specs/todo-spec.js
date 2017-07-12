var site = 'https://concierge.totalwine.com/my-account';

describe('Test totalwine', function() {

	beforeEach(function() {
		return browser.ignoreSynchronization = true;
	});

	it('should not login', function() {
		browser.get(site);
		var loginForm = findFormByAction('public:account.login');

		loginForm.element(by.name('emailAddress')).sendKeys('my@email.com');
		loginForm.element(by.name('password')).sendKeys('b4dp4ssw0rd');
		loginForm.element(by.css('button')).click();

		expect(loginForm.element(by.css('.text-error')).getText())
			.toBe('The username or password that you entered is invalid.');
	});


	it('should return bad emailAddress', function() {
		browser.get(site);
		var loginForm = findFormByAction('public:account.login');

		loginForm.element(by.name('emailAddress')).sendKeys('bademailcom');
		loginForm.element(by.name('password')).sendKeys('b4dp4ssw0rd');
		loginForm.element(by.css('button')).click();

		expect(loginForm.element(by.css('.text-error')).getText())
			.toBe('The Email Address is not a valid email address. Email addresses should follow an example like john.doe@gmail.com.');
	});

	it('Example with generic login function', function() {
		browser.get(site);
		login('good@email.com', 'b4dp4ssw0rd');
		expect( findFormByAction('public:account.login').element(by.css('.text-error')).getText())
			.toBe('The Email Address is not a valid email address. Email addresses should follow an example like john.doe@gmail.com.');
	});

});


function findFormByAction(action){
	return element(by.css('input[name="slatAction"][value="'+action+'"]')).element(by.xpath('..'));
}

function login(email, pass){
	var loginForm = findFormByAction('public:account.login');
	loginForm.element(by.name('emailAddress')).sendKeys(email);
	loginForm.element(by.name('password')).sendKeys(pass);
	loginForm.element(by.css('button')).click();
}