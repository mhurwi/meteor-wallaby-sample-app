import React from 'react';

import { WidgetItem } from '../components/widget-item';
import { WidgetForm } from '../components/widget-form';

export const WidgetIndex = React.createClass({
  render() {
    return (
      <div>
        <h1>Widget Index</h1>
        { this.props.widgets.map( widget => <WidgetItem {...widget} key={widget.id}/> ) }
        <WidgetForm />
      </div>
    );
  }
});
