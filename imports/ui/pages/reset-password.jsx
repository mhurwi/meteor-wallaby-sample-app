import React from 'react';
import { Link } from 'react-router';

import { ResetPasswordForm } from '../components/reset-password-form';

export const ResetPassword = React.createClass({
  render() {
    return (
      <div>
        <ResetPasswordForm token={this.props.params.token} resetPassword={this.props.resetPassword}/>
      </div>
    );
  }
});
