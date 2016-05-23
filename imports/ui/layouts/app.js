import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Widgets from '../../api/widgets/widgets-collection';
import * as clientActions from '../actions/clientActions';
import Main from './main';


function mapStateToProps(state) {
  return  {
    user: Meteor.user(),
    widgets: Widgets.find().fetch(),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(clientActions, dispatch);
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
