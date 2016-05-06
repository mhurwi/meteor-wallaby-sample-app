module.exports = function () {
  'use strict';


  this.Before(function () {
    this.testProps = {
      rootUrl: 'http://localhost:3000/',
      createTestUser(email) {
        server.execute(function(email) {
          const u = Accounts.findUserByEmail(email);

          if (typeof u !== 'undefined') {
            Meteor.users.remove({_id: u._id});
          }

          Accounts.createUser({
            email: email,
            password: "testtest"
          });
        }, email);
      }
    };

    browser.execute(function() {
      Meteor.logout();
    });

    browser.url(this.testProps.rootUrl);

    server.execute(function (){
      Meteor.users.remove({});
    });

    browser.pause(600);
  });
};
