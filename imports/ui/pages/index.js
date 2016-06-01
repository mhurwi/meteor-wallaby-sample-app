import React from 'react';
import { Link } from 'react-router';

import UserDetails from '../components/user-details';
import { Meteor } from 'meteor/meteor'

export class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <div>
        <h2 className="landing-header">
          <Link to="/">Landing Page</Link>
        </h2>
      </div>
    );
  }
};
