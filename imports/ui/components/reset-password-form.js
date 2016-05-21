import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import { Input, Row } from 'formsy-react-components';

import { resetPassword } from '../actions/clientActions.js'

export const ResetPasswordForm = React.createClass({

  resetForm() {
    this.refs.form.reset();
  },

  validSubmit(data) {
    resetPassword(this.props.token, data.password);
  },

  invalidSubmit() {
  },

  enableButton() {
    this.setState({ canSubmit: true });
  },

  disableButton() {
    this.setState({ canSubmit: false });
  },

  getInitialState() {
    return {
      layout: 'vertical',
      validatePristine: true,
      disabled: false,
      canSubmit: false
    };
  },

  render() {

    const {error} = this.props;
    const formClassName = 'vertical m-t';
    const sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };

    return (
        <Formsy.Form className={formClassName}
          onValidSubmit={this.validSubmit}
          onInvalidSubmit={this.invalidSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onChange={this.onChange}
          ref="form">
          <fieldset>
            {error ?
            <div className="alert alert-danger" onClick="">
              <span className="octicon octicon-megaphone" ></span>
              {error}
            </div> : null }
            <Input
                {...sharedProps}
                name="password"
                value=""
                label="Password"
                type="password"

                validations="minLength:8"
                validationError="Your password must be at least 8 characters long."
                placeholder="Your new password"
            />
          </fieldset>
          <Row layout={this.state.layout}>
            <input className="btn btn-primary block full-width m-b"
              formNoValidate={true}
              disabled={!this.state.canSubmit}
              type="submit"
              defaultValue="Reset Password" />
          </Row>
        </Formsy.Form>

    );
  }
});
