import React from 'react';
import { Link } from 'react-router';

import { ResetPasswordForm } from '../components/reset-password-form';

export function ResetPassword({ params, resetPassword }) {
  return (
    <div>
      <ResetPasswordForm token={params.token} resetPassword={resetPassword} />
    </div>
  );
}
