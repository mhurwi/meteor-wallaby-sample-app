module.exports = function () {
  'use strict';

  this.Given(/^that a user exists with email "([^"]*)"$/, function (email) {
    this.testProps.createTestUser(email);
  });

  this.When(/^I login$/, function () {
    browser.url(this.testProps.rootUrl + 'login');
    const emailField = 'input[name="email"]';
    browser.waitForExist(emailField, 200);
    browser.setValue(emailField, 'test@example.com');
    browser.setValue('input[name="password"]', 'testtest');
    browser.click('input[type="submit"]');
  });

  this.Then(/^I can login and see my dashboard$/, function () {
    const header = '.dashboard-header';
    browser.waitForExist(header);
    expect(browser.isVisible(header)).toEqual(true);

    const selector = '.user-email';
    browser.waitForExist(selector, 600);
    expect(browser.getText(selector)).toEqual('test@example.com');
  });
};
