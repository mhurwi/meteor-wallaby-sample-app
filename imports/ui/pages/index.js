import React from 'react';
import UserDetails from '../containers/user-details';
import { Meteor } from 'meteor/meteor'

export const Index = React.createClass({
  render() {
    return (
      <div>
          <h2 className="index-header">Index</h2>
          <UserDetails />
      </div>
    );
  },
});
