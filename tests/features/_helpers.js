module.exports = function () {
  'use strict';

  const rootUrl = 'http://localhost:3000/';
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
    browser.execute(function() { Meteor.logout(); });
    server.execute(function (){
      Meteor.users.remove({});
    });
    browser.pause(600);
  });
};
