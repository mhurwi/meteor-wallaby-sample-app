import actionTypes from '../actions/actionTypes';

export default function accounts(state = {}, action) {
  console.log('reducers/accounts')
  switch (action.type) {
    case actionTypes.RECOVER_PASSWORD_SUCCESS:
      console.log('RECOVER_PASSWORD_SUCCESS');
      return state;
    case actionTypes.RESET_PASSWORD_SUCCESS:
      console.log('RESET_PASSWORD_SUCCESS');
      return state;
    default:
      return state;
  }
}
