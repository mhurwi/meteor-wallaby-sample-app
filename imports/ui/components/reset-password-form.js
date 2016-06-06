import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import { Input, Row } from 'formsy-react-components';

import { resetPassword } from '../actions/actionCreators.js';

export class ResetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'vertical',
      validatePristine: true,
      disabled: false,
      canSubmit: false,
    };

    this.setState = this.setState.bind(this);

    this.resetForm = this.resetForm.bind(this);
    this.validSubmit = this.validSubmit.bind(this);
    this.invalidSubmit = this.invalidSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  resetForm() {
    this.refs.form.reset();
  }

  validSubmit(data) {
    this.props.resetPassword(this.props.token, data.password);
  }

  invalidSubmit() {
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    const { error } = this.props;
    const formClassName = 'vertical m-t';
    const sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled,
    };

    return (
        <Formsy.Form className={formClassName}
          onValidSubmit={this.validSubmit}
          onInvalidSubmit={this.invalidSubmit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onChange={this.onChange}
          ref="form"
        >
          <fieldset>
            {error ?
            <div className="alert alert-danger" onClick="">
              <span className="octicon octicon-megaphone" ></span>
              {error}
            </div> : null}
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
              formNoValidate
              disabled={!this.state.canSubmit}
              type="submit"
              defaultValue="Reset Password"
            />
          </Row>
        </Formsy.Form>

    );
  }
}
