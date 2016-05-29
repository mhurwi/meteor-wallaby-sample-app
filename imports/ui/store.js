import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import Widgets from '../api/widgets/widgets-collection';

const defaultState = {
};

// for use with redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk),
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
