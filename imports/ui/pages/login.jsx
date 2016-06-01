import React from 'react';
import { Link } from 'react-router';

import { LoginForm } from '../components/login-form';

export const Login = React.createClass({
  render() {
    return (
      <div>
        <LoginForm login={this.props.login} />
        <Link to="/signup">Signup</Link>
        {" | "}
        <Link to="/recover-password">Forgot your password?</Link>
      </div>
    );
  }
});
