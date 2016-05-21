import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router'

export function recoverPassword(email) {
  console.log('clientActions: recoverPassword');
  Accounts.forgotPassword({email: email}, (err) => {
    if (err) console.log(err);

    console.log('Accounts.forgotPassword: callback called without error');
  });
}


export function resetPassword(token, password) {
  console.log('clientActions: resetPassword');
  Accounts.resetPassword(token, password, (err) => {
    if (err) console.log(err);

    console.log('Accounts.resetPassword: callback called without error');
    browserHistory.push('/')
  });
}
