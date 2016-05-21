import React from 'react';
import { Link } from 'react-router';

import { LoginForm } from '../components/login-form';

export const Login = React.createClass({
  render() {
    return (
      <div>
        <LoginForm />
        <Link to="/signup">or signup</Link>
        <Link to="/recover-password">Forgot your password?</Link>
      </div>
    );
  }
});
