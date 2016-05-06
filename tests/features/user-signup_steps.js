module.exports = function () {
  'use strict';

  this.Given(/^I visit the signup page$/, function () {
    browser.url('http://localhost:3000/signup');
  });

  this.When(/^I complete the signup form$/, function () {
    const emailField = 'input[name="email"]';
    browser.waitForExist(emailField, 200);
    browser.setValue(emailField, 'test@example.com');
    browser.setValue('input[name="password1"]', 'testtest');
    browser.setValue('input[name="password2"]', 'testtest');
    browser.click('input[type="submit"]');
  });

  this.Then(/^I should be redirected to my dashboard$/, function () {
    const header = '.index-header';
    browser.waitForExist(header);
    expect(browser.getText(header)).toEqual('Index');
  });

  this.Then(/^I should see my email$/, function () {
    const selector = '.user-email';
    browser.waitForExist(selector, 600);
    expect(browser.getText(selector)).toEqual('test@example.com');
  });
};
