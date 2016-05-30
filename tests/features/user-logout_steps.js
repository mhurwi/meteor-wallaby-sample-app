module.exports = function() {
  'use strict';

  this.When(/^I logout$/, function () {
    const logoutButton = '.logout-button';
    browser.waitForExist(logoutButton);
    browser.click(logoutButton);
  });

  this.Then(/^I should see the public landing page$/, function () {
    expect(browser.getUrl()).toMatch('/login');
  });
}
