import React from 'react';

import { RecoverPasswordForm } from '../components/recover-password-form';

export function RecoverPassword({ recoverPassword }) {
  return (
    <div>
      <RecoverPasswordForm recoverPassword={recoverPassword} />
    </div>
  );
}
