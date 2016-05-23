import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as clientActions from '../actions/clientActions';
import Main from './main';


function mapStateToProps(state) {
  return  {
    user: Meteor.user(),
    widgets: state.widgets,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(clientActions, dispatch);
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
