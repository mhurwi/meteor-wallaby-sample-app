import actionTypes from './actionTypes';
import { Accounts } from 'meteor/accounts-base';
import Alert from 'react-s-alert';
import { browserHistory } from 'react-router'

// These are basic actions that occur after any async
// thunk-containing action
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

export function signupSuccess() {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  }
}

export function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  }
}


// These are thunk-containing async actions
// They talk to the api and produce side effects
// And then they dispatch basic success or failure action
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
      browserHistory.push('/dashboard');
      dispatch(resetPasswordSuccess(token, password))
    });
  }
}

export function signup(data) {
  console.log('actionCreators: signup')
  return function(dispatch) {
    Accounts.createUser({email: data.email, password: data.password1}, (err) => {
      if (err && err.reason) {
        Alert.warning(err.reason);
      }
      browserHistory.push('/dashboard');
      dispatch(signupSuccess());
    });
  }
}

export function login(data) {
  console.log('actionCreators: login')
  return function(dispatch) {
    Meteor.loginWithPassword(data.email, data.password, (err) => {
      if (err && err.reason) {
        Alert.warning(err.reason)
      }
      browserHistory.push('/dashboard');
      dispatch(loginSuccess());
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
