import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { composeWithTracker } from 'react-komposer';

import UserDetails from '../components/user-details';
import { Loading } from '../components/loading';

const composer = (params, onReady) => {
  const user = Meteor.user();

  onReady(null, { user });
};

function mapStateToProps(state) {
  return { banana: 'banana is so good' }
}

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h2 className="dashboard-header">
          <Link to="/dashboard">Dashboard</Link>
        </h2>
        <UserDetails user={this.props.user} />
        <Link to="/widgets">Widgets</Link>
      </div>
    );
  }
}

// First, create the connected el that passes along all the redux
// state and actions to the children
const connectedEl = connect(mapStateToProps)(Dashboard);

// and then compose a new element that has maps
// meteor mongo collections to props
export default composeWithTracker(composer, Loading)(connectedEl);
