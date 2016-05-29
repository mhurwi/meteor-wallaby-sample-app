import actionTypes from './actionTypes';

export function recoverPassword(email) {
  console.log('actionCreators: recoverPassword');
  return {
    type: actionTypes.RECOVER_PASSWORD,
    email
  };
}


export function resetPassword(token, password) {
  console.log('actionCreators: resetPassword');
  return {
    type: actionTypes.RESET_PASSWORD,
    token,
    password
  };
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
