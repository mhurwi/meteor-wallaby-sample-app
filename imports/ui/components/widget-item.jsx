import React, { Component } from 'react';
import Alert from 'react-s-alert';

export const WidgetItem = React.createClass({
  causeAlert() {
    Alert.warning(this.props.name, {
      position: 'top-right',
      effect: 'stackslide',
    });
  },

  render() {
    const name = this.props.name || 'crabapple';

    return (
      <div>
        <h3>Widget Item</h3>
        <p className='foo-text'>{ name }</p>
                <button onClick={this.causeAlert}>Widget #{ this.props.id }</button>
      </div>
    );
  }
});
