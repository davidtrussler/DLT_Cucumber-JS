const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({Given, Then, When}) {
	Given('I start with {int}', function (int) {
		// Write code here that turns the phrase above into concrete actions
		return 'pending';
	});

	When('I add {int}', function (int) {
		// Write code here that turns the phrase above into concrete actions
		return 'pending';
	});

	Then('the result is {int}', function (int) {
		// Write code here that turns the phrase above into concrete actions
		return 'pending';
	});
}); 
