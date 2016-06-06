import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { composeWithTracker } from 'react-komposer';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import Widgets from '../../api/widgets/widgets-collection';
import * as actionCreators from '../actions/actionCreators';

import Header from '../components/header';
import { Loading } from '../components/loading';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header user={this.props.user} logout={this.props.logout} />
        {React.cloneElement(this.props.children, this.props)}
        <Alert stack={{ limit: 3 }} />
      </div>
    );
  }
}

const composer = (params, onReady) => {
  const user = Meteor.user();

  onReady(null, { user });
};

function mapStateToProps(state) {
  return {
    accounts: {
      loggedIn: !!Meteor.user(),
    },
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const connectedEl = connect(mapStateToProps, mapDispatchToProps)(Main);
export const App = composeWithTracker(composer, Loading)(connectedEl);

export default App;
