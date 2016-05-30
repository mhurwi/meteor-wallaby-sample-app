import actionTypes from '../actions/actionTypes';

export default function accounts(state = {}, action) {
  switch (action.type) {
    case actionTypes.RECOVER_PASSWORD_SUCCESS:
      console.log('RECOVER_PASSWORD_SUCCESS');
      return state;
    case actionTypes.RESET_PASSWORD_SUCCESS:
      console.log('RESET_PASSWORD_SUCCESS');
      return state;
    case actionTypes.LOGOUT_SUCCESS:
      console.log('LOGOUT_SUCCESS');
      return { loggedIn: false };
    default:
      return state;
  }
}
