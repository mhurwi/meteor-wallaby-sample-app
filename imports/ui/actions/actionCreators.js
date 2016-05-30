import actionTypes from './actionTypes';
import { Accounts } from 'meteor/accounts-base';
import Alert from 'react-s-alert';
import { browserHistory } from 'react-router'


export function recoverPasswordSuccess(email) {
  return {
    type: actionTypes.RECOVER_PASSWORD_SUCCESS,
    email
  };
}

export function resetPasswordSuccess(token, password) {
  return {
    type: actionTypes.RESET_PASSWORD_SUCCESS,
    token,
    password
  };
}

export function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  }
}

export function recoverPassword(email) {
  return function(dispatch) {
    console.log('actionCreators: recoverPassword');
    Accounts.forgotPassword({email: email}, (err) => {
      if (err) {
        if (err.reason) Alert.warning(err.reason);
        console.log(err);
      }
      Alert.success('An email has been sent.');
      dispatch(recoverPasswordSuccess(email));
    });
  }
}

export function resetPassword(token, password) {
  console.log('actionCreators: resetPassword');
  return function(dispatch) {
    Accounts.resetPassword(token, password, (err) => {
      if (err) {
        if (err.reason) Alert.warning(err.reason);
        console.log(err);
      }

      Alert.success('Your password has been reset.');
      browserHistory.push('/')
      dispatch(resetPasswordSuccess(token, password))
    });
  }
}

export function logout() {
  console.log('actionCreators: logout')
  return function(dispatch) {
    Meteor.logout((err) => {
      browserHistory.push('/login')
      dispatch(logoutSuccess());
    });
  }
}

export function createWidgetSuccess(data) {
  return {
    type: actionTypes.CREATE_WIDGET_SUCCESS,
    ...data
  };
}

export function createWidget(data) {
  return function(dispatch) {
    Widgets.insert(data, (err, res) => {
      if (err) throw new Meteor.Error(err);

      dispatch(createWidgetSuccess(res));
    })
  }
}
