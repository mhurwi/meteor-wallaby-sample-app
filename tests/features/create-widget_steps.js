module.exports = function () {
  'use strict';

  this.Given(/^I visit the widgets index$/, function () {
    browser.url(this.testProps.rootUrl + 'widgets');
  });

  this.When(/^I submit the completed form$/, function () {
    const nameInput = 'input[name="name"]';
    browser.waitForExist(nameInput);
    browser.setValue(nameInput, 'Test Widget');
    browser.click('input[type="submit"]');
  });

  this.Then(/^I should see the new widget$/, function () {
    browser.pause(500);

    const widgetNames = '.widget-name'
    expect(browser.getText('.widget-name')).toMatch('Test Widget');
  });
};
