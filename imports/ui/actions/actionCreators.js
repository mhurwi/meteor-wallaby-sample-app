import Constants from './constants';

export function recoverPassword(email) {
  console.log('actionCreators: recoverPassword');
  return {
    type: Constants.RECOVER_PASSWORD,
    email
  };
}


export function resetPassword(token, password) {
  console.log('actionCreators: resetPassword');
  return {
    type: Constants.RESET_PASSWORD,
    token,
    password
  };
}

export function createWidget(data) {
  console.log('actionCreators: ', data);
  return {
    type: Constants.CREATE_WIDGET,
    ...data
  };
}
