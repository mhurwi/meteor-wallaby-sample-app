import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import widgets from './widgets';

export default combineReducers({widgets, routing : routerReducer});
