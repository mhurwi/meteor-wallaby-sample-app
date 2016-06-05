/* eslint-disable */

module.exports = function () {
  'use strict';

  const rootUrl = 'http://localhost:3100/';
  const uriPattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;

  function createTestUser(email) {
    server.execute(function(email) {
      const u = Accounts.findUserByEmail(email);

      if (typeof u !== 'undefined') Meteor.users.remove({_id: u._id});

      Accounts.createUser({
        email: email,
        password: "testtest"
      });
    }, email);
  }

  this.Before(function () {
    this.testProps = {
      rootUrl,
      createTestUser,
      uriPattern
    };
    browser.url(this.testProps.rootUrl);
    browser.execute(function() { Meteor.logout(); })
    server.execute(function (){
      Meteor.call('setupForTest')
    });
    browser.pause(600);
  });

  this.Given(/^that I am logged in as "([^"]*)"$/, function (email) {
    this.testProps.createTestUser(email);
    browser.pause(500);

    browser.url(this.testProps.rootUrl + 'login');
    const emailField = 'input[name="email"]';
    browser.waitForExist(emailField, 200);
    browser.setValue(emailField, 'test@example.com');
    browser.setValue('input[name="password"]', 'testtest');
    browser.click('input[type="submit"]');
    browser.pause(500);
  });
};
