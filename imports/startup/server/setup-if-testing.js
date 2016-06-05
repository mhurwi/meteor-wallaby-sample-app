import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

import Widgets from '../../api/widgets/widgets-collection';

function stubEmailSend() {
  console.log('=-=-=-=-=-=-=-= setup-if-testing: stubEmailSend -=-=-=-');

  const fakeInboxCollection = new Package['mongo'].Mongo.Collection('Emails');

  function initFakeInbox() {
    fakeInboxCollection.remove({});
    Email.send = function sendEmail(options) {
      fakeInboxCollection.insert(options);
    };
  }
  function clearEmails() {
    fakeInboxCollection.remove({});
  }
  function getSentEmails() {
    return fakeInboxCollection.find().fetch();
  }

  clearEmails();
  initFakeInbox();

  Meteor.methods({
    clearEmails,
    getSentEmails,
  });

  return true;
}

Meteor.startup(() => {
  if (!Meteor.settings ||
      !Meteor.settings.private ||
      Meteor.settings.private.environment !== 'test') return false;

  stubEmailSend();

  Meteor.methods({
    setupForTest() {
      Meteor.call('clearEmails');
      Meteor.users.remove({});
      Widgets.remove({});
    },
  });

  return true;
});
