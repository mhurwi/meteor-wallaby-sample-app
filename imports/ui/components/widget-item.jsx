import React, { Component } from 'react';

export const WidgetItem = React.createClass({
  render() {
    const name = this.props.name || 'crabapple';

    return (
      <div>
        <h3>Widget Item</h3>
        <p className='widget-name'>{ name }</p>
      </div>
    );
  }
});
