module.exports = function() {
  'use strict';

  this.When(/^I visit the home page$/, function () {
  });

  this.Then(/^I should see widget related information$/, function () {
    const selector = '.widget-name';
    browser.waitForExist(selector);
    expect(browser.isVisible(selector)).toEqual(true);
  });

};
