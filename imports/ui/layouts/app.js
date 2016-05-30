import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { composeWithTracker } from 'react-komposer';
import { Loading } from '../components/loading';

import Widgets from '../../api/widgets/widgets-collection';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';


const composer = (params, onReady) => {
  const user = Meteor.user();

  onReady(null, { user });
};

function mapStateToProps(state) {
  return  {
    accounts: {
      loggedIn: !!Meteor.user()
    }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const connectedEl = connect(mapStateToProps, mapDispatchToProps)(Main);
export const App = composeWithTracker(composer, Loading)(connectedEl);

export default App;
