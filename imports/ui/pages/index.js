import React from 'react';
import { Link } from 'react-router';
import Alert from 'react-s-alert';

import UserDetails from '../containers/user-details';
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
        <h2 className="index-header">
          <Link to="/">Index</Link>
        </h2>
        <UserDetails />
        <Link to="/widgets">Widgets Index</Link>
        <button onClick={this.causeAlert}>Alert me!!!</button>
      </div>
    );
  },
});
