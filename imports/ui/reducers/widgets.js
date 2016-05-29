import Constants from '../actions/constants';
import Widgets from '../../api/widgets/widgets-collection';

export default function widgets(state = {}, action) {
  switch (action.type) {
    case Constants.CREATE_WIDGET: // TODO: use a constant
      Widgets.insert({name: action.name});
      console.log('reducers/widgets CREATE_WIDGET')
      return state;
    default:
      return state;

  }
}
