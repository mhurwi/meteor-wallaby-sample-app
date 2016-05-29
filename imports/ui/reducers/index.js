import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import widgets from './widgets';
import accounts from './accounts';

export default combineReducers({accounts, widgets, routing : routerReducer});
