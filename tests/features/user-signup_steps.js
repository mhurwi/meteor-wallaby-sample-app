module.exports = function () {
  'use strict';

  this.Given(/^I visit the signup page$/, function () {
    browser.url('http://localhost:3000/signup');
  });

  this.When(/^I complete the signup form$/, function () {
    const emailField = 'input[name="email"]';
    browser.waitForExist(emailField, 200);
  });

  this.Then(/^I should be redirected to my dashboard$/, function () {
    // Write the automation code here
    pending();
  });

  this.Then(/^I should see my email$/, function () {
    // Write the automation code here
    pending();
  });
};
