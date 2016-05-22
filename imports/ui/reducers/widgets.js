// a reducer takes 2 things
// 1. the action
// 2. copy of current state

export default function widgets(state = [], action) {
  switch (action.type) {
    case 'CREATE_WIDGET': // TODO: use a constant
      const i = action.index;
      // create a new widget;
      return state;
    default:
      return state;

  }
}
