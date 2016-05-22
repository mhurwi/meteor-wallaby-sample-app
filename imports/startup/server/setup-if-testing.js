import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

function stubEmailSend() {
  if (!Meteor.settings || !Meteor.settings.private || Meteor.settings.private.environment !== 'test') return false;

  console.log('=-=-=-=-=-=-=-= setup-if-testing: stubEmailSend -=-=-=-');

  const _fakeInboxCollection = new Package['mongo'].Mongo.Collection('Emails');

  function _initFakeInbox () {
    _fakeInboxCollection.remove({});
    Email.send = function (options) {
      _fakeInboxCollection.insert(options);
    };
  }
  function _clearEmails () {
    _fakeInboxCollection.remove({});
  }
  function _getSentEmails() {
    return _fakeInboxCollection.find().fetch();
  }

  _clearEmails();
  _initFakeInbox();

  Meteor.methods({
    'clearEmails': _clearEmails,
    'getSentEmails': _getSentEmails
  });
}

Meteor.startup(() => {
  stubEmailSend();
});
