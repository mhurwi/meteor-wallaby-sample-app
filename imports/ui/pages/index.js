import React from 'react';
import Alert from 'react-s-alert';

import UserDetails from '../containers/user-details';
import { WidgetItem } from '../components/widget-item';
import { Meteor } from 'meteor/meteor'

export const Index = React.createClass({
  causeAlert() {
    Alert.warning('alright!!!', {
      position: 'top-right',
      effect: 'stackslide',
    });
  },

  render() {
    return (
      <div>
        <h2 className="index-header">Index</h2>
        <UserDetails />
        <WidgetItem fooText="Hurray!"/>
        <button onClick={this.causeAlert}>Alert me!!!</button>
      </div>
    );
  },
});
