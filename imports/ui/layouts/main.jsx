import React from 'react';
import { Link } from 'react-router';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

import Header from '../components/header';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Header user={this.props.user} logout={this.props.logout} />
        {React.cloneElement(this.props.children, this.props)}
        <Alert stack={{limit: 3}} />
      </div>
    )
  }
});

export default Main;
