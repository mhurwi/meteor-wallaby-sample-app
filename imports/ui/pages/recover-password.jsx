import React from 'react';
import { Link } from 'react-router';

import { RecoverPasswordForm } from '../components/recover-password-form';

export const RecoverPassword = React.createClass({
  render() {
    return (
      <div>
        <RecoverPasswordForm recoverPassword={this.props.recoverPassword}/>
      </div>
    );
  }
});
