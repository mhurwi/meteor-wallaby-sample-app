import React from 'react';

import { WidgetItem } from '../components/widget-item';

export const WidgetIndex = React.createClass({
  render() {
    return (
      <div>
        <h1>Widget Index</h1>
        <WidgetItem fooText="Hurray!"/>
      </div>
    );
  }
});
