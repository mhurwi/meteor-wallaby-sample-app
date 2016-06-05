import { Meteor } from 'meteor/meteor';
import Widgets from '../widgets-collection';


Meteor.publish('widgets', function () {
  return Widgets.find();
});
