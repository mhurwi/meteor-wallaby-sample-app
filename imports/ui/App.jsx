import React, { Component } from 'react';
import { WidgetItem } from './widget-item';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Application Banana</h1>
          <WidgetItem fooText="pizza"/>
        </header>
      </div>
    );
  }
}
