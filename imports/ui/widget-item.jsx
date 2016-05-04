import React, { Component } from 'react';

export const WidgetItem = React.createClass({
  render() {
    const fooText = this.props.fooText || 'crabapple';

    return (
      <div>
        <h1>Hi Banana Pie</h1>
        <p>{ fooText }</p>
        <button ref='test-button'>Click Me</button>
      </div>
    );
  }
});
