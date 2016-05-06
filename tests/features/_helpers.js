module.exports = function () {
  'use strict';


  this.Before(function () {
    server.execute(function (){
      Meteor.users.remove({});
    });

    browser.execute(function() {
      Meteor.logout();
    });

    this.testProps = {
      rootUrl: 'http://localhost:3000'
    };
    
    browser.url(this.testProps.rootUrl);
  });
};
