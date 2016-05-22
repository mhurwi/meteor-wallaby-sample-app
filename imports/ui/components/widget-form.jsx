import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import { Input, Row } from 'formsy-react-components';

// import { recoverPassword } from '../actions/clientActions.js'

export const WidgetForm = React.createClass({

  resetForm() {
    this.refs.form.reset();
  },

  validSubmit(data) {
    console.log('WidgetForm: validSubmit: ', data.name);
    // TODO: createWidget(data.name);
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
                name="name"
                value=""
                label="Name"
                type="name"
                placeholder="This is an name input."
                autoComplete="off"
                validationError="Please provide a name for your widget."
            />
          </fieldset>
          <Row layout={this.state.layout}>
            <input className="btn btn-primary block full-width m-b"
              formNoValidate={true}
              disabled={!this.state.canSubmit}
              type="submit"
              defaultValue="Create Widget" />
          </Row>
        </Formsy.Form>

    );
  }
});
