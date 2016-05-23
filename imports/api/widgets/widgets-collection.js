import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

class WidgetsCollection extends Mongo.Collection {
  insert(doc, callback) {
  const ourDoc = doc;
  ourDoc.createdAt = ourDoc.createdAt || new Date();
  const result = super.insert(ourDoc, callback);
  return result;
}
update(selector, modifier) {
  const result = super.update(selector, modifier);
  return result;
}
remove(selector) {
  const todos = this.find(selector).fetch();
  const result = super.remove(selector);
  return result;
}
}

export default Widgets = new WidgetsCollection('Widgets');
