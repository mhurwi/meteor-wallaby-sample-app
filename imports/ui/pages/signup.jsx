import React from 'react';
import { Link } from 'react-router';

import { SignupForm } from '../components/signup-form';

export function Signup({ signup }) {
  return (
    <div>
      <SignupForm signup={signup} />
      <Link to="/login">or login</Link>
    </div>
  );
}
