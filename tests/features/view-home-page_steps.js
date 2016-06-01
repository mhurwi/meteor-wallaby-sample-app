module.exports = function() {
  'use strict';

  this.When(/^I visit the home page$/, function () {
  });

  this.Then(/^I should see a link to the widgets index$/, function () {
    const selector = 'a[href="/widgets"]';
    browser.waitForExist(selector);
    expect(browser.isVisible(selector)).toEqual(true);
  });

  this.Then(/^I should see the landing page$/, function () {
    const selector = '.landing-header';
    browser.waitForExist(selector);
    expect(browser.isVisible(selector)).toEqual(true);
  });

};
