import React from 'react';
import { Link } from 'react-router';

import { SignupForm } from '../components/signup-form';

export const Signup = React.createClass({
  render() {
    return (
      <div>
        <SignupForm signup={this.props.signup} />
        <Link to="/login">or login</Link>
      </div>
    );
  }
});
