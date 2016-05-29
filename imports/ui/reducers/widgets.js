import actionTypes from '../actions/actionTypes';
import Widgets from '../../api/widgets/widgets-collection';

export default function widgets(state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_WIDGET_SUCCESS:
      console.log('reducers/widgets CREATE_WIDGET');

      return state;
    default:
      return state;

  }
}
