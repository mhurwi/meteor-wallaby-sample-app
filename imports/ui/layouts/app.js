import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Widgets from '../../api/widgets/widgets-collection';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';


function mapStateToProps(state) {
  return  {
    user: Meteor.user()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
