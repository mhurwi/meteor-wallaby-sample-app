import { ActionTypes } from '../actions/clientActions';

// a reducer takes 2 things
// 1. the action
// 2. copy of current state

export default function widgets(state = {}, action) {
  switch (action.type) {
    case 'CREATE_WIDGET': // TODO: use a constant
      // we already created a widget. add it to the state
      const newState = { ...state };
      const newWidgets = newState.widgets.push({ name: action.name });
      newState.widgets = newWidgets;
      return newState;
    default:
      return state;

  }
}
