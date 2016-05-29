import { Accounts } from 'meteor/accounts-base';
import Constants from '../actions/constants';
import Alert from 'react-s-alert';
import { browserHistory } from 'react-router'

export default function accounts(state = {}, action) {
  console.log('reducers/accounts')
  switch (action.type) {
    case Constants.RECOVER_PASSWORD:
      console.log('RECOVER_PASSWORD');
      Accounts.forgotPassword({email: action.email}, (err) => {
        if (err) {
          if (err.reason) Alert.warning(err.reason);
          console.log(err);
        }
        Alert.success('An email has been sent.');
        console.log('Accounts.forgotPassword: callback called without error');
      });
      return state;
    case Constants.RESET_PASSWORD:
      console.log('RESET_PASSWORD');

      Accounts.resetPassword(action.token, action.password, (err) => {
        if (err) {
          if (err.reason) Alert.warning(err.reason);
          console.log(err);
        }

        Alert.success('Your password has been reset.');
        browserHistory.push('/')
        console.log('Accounts.resetPassword: callback called without error');
      });

      return state;
    default:
      return state;
  }
}
