module.exports = function() {
  'use strict';

  this.Given(/^I visit the recover password page$/, function () {
    browser.url(this.testProps.rootUrl + 'recover-password');
    browser.pause(50);
  });

  this.When(/^I click to recover my password for "([^"]*)"$/, function (email) {
    const emailInput = 'input[name="email"]';
    browser.waitForExist(emailInput);
    browser.setValue(emailInput, email);

    browser.click('input[type="submit"]');
  });

  this.When(/^I visit the link that came in the recovery password email$/, function () {
    browser.pause(1000);
    const email = server.call('getSentEmails')[0];
    const url = email.text.match(this.testProps.uriPattern)[0];

    browser.url(url);
  });

  this.Then(/^I should not need to know my current password$/, function () {
    browser.waitForExist('input[name="password"]');
    expect(browser.isVisible('input[name="currentPassword"]')).toEqual(false);
  });

  this.Then(/^I can reset my password$/, function () {
    browser.setValue('input[name="password"]', 'apple1234');
    browser.click('input[type="submit"]');

    browser.waitForExist('.dashboard-header', 1000);
    expect(browser.isVisible('.dashboard-header')).toEqual(true);
  });
};
