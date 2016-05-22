import React from 'react';
import { Link } from 'react-router';

import UserDetails from '../containers/user-details';
import { Meteor } from 'meteor/meteor'

export const Index = React.createClass({

  render() {
    return (
      <div>
        <h2 className="index-header">
          <Link to="/">Index</Link>
        </h2>
        <UserDetails />
        <Link to="/widgets">Widgets Index</Link>
      </div>
    );
  },
});
