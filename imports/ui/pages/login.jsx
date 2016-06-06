import React from 'react';
import { Link } from 'react-router';

import { LoginForm } from '../components/login-form';

export function Login({ login }) {
  return (
    <div>
      <LoginForm login={login} />
      <Link to="/signup">Signup</Link>
      {" | "}
      <Link to="/recover-password">Forgot your password?</Link>
    </div>
  );
}
