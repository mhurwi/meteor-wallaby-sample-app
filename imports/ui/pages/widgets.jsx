import React from 'react';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import WidgetsCollection from '../../api/widgets/widgets-collection';
import { WidgetIndex } from '../components/widget-index.jsx';
import { Loading } from '../components/loading';

const composer = (params, onReady) => {
  const subscription = Meteor.subscribe('widgets');

  if (subscription.ready()) {
    const widgets = WidgetsCollection.find().fetch();
    onReady(null, { widgets });
  }
};

function mapStateToProps(state) {
  return { banana: 'banana is so good' }
}

class Widgets extends React.Component {
  render() {
    return (
      <div>
        <WidgetIndex />
      </div>
    );
  }
}

// First, create the connected el that passes along all the redux
// state and actions to the children
const connectedEl = connect(mapStateToProps)(WidgetIndex);

// and then compose a new element that has maps
// meteor mongo collections to props
export default composeWithTracker(composer, Loading)(connectedEl);
