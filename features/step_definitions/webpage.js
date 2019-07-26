const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const seleniumWebdriver = require('selenium-webdriver');

defineSupportCode(function({Given, Then, When}) {
  Given('I am on the web page', function () {
    return this.driver.get('http://localhost:5000');
  });

  When('I change the dropdown to green', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the colour of the test box is green', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
});
