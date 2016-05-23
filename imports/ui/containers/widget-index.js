import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import Widgets from '../../api/widgets/widgets-collection';
import { WidgetIndex } from '../components/widget-index';
import { Loading } from '../components/loading';
//
const composer = (params, onReady) => {
  console.log('ui/containers/widget-index composer');
  const subscription = Meteor.subscribe('widgets');

  if (subscription.ready()) {
    const widgets = Widgets.find().fetch();
    onReady(null, { widgets });
  }
};

export default composeWithTracker(composer, Loading)(WidgetIndex);
