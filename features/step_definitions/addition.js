const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

defineSupportCode(function({Given, Then, When}) {
  var answer;

	Given('I start with {int}', function (input) {
		answer = input; 
	});

	When('I add {int}', function (input) {
		answer += input; 
	});

	Then('the result is {int}', function (input) {
		assert.equal(answer, input); 
	});
}); 
