import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
  widgets: [
    {id: 1, name: 'first widget'},
    {id: 2, name: 'second widget'},
    {id: 3, name: 'third widget'},
  ]
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
