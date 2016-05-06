import React from 'react';
// import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import {
  // Checkbox,
  // CheckboxGroup,
  Input,
  // RadioGroup,
  Row,
  // Select,
  // File,
  // Textarea

} from 'formsy-react-components';

export const Signup = React.createClass({

  resetForm() {
    this.refs.form.reset();
  },

  validSubmit(data) {
    console.log(data);

    if (data.password1 !== data.password2) {
      console.log('Passwords do not match');
    }
    Accounts.createUser({email: data.email, password: data.password1}, (err) => {
      if (err && err.reason) {
        console.log(err.reason);
      }
      browserHistory.push('/');
    });
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

    let formClassName = 'vertical m-t';

    var sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };

    const {error} = this.props;

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
                name="email"
                value=""
                label="Email"
                type="email"
                placeholder="This is an email input."

                autoComplete="off"

                validations="isEmail"
                validationError="Please provide a valid email address."

            />


            <Input
                {...sharedProps}
                name="password1"
                value=""
                label="Password"
                type="password"

                validations="minLength:8"
                validationError="Your password must be at least 8 characters long."
                placeholder="Choose a password"
            />
            <Input
                {...sharedProps}
                name="password2"
                value=""
                label="Confirm password"
                type="password"


                validations="equalsField:password1"
                validationErrors={{
                  equalsField: 'Passwords must match.'
                }}

                placeholder="Retype password"
            />

          </fieldset>

          <Row layout={this.state.layout}>

            <input className="btn btn-primary block full-width m-b"
              formNoValidate={true}
              disabled={!this.state.canSubmit}
              type="submit"
              defaultValue="Register" />

          </Row>

        </Formsy.Form>

    );
  }
});
