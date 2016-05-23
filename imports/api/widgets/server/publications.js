import { Meteor } from 'meteor/meteor';

Meteor.publish('widgets', function(){
  return Widgets.find();
});
