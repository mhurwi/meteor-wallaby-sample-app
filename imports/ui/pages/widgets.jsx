import React from 'react';

import WidgetIndex from '../containers/widget-index';
import { WidgetItem } from '../components/widget-item';
import { WidgetForm } from '../components/widget-form';

export class Widgets extends React.Component {
  render() {
    return (
      <div>
        <h1>Widgets</h1>
        <WidgetForm />
        <WidgetIndex />
      </div>
    );
  }
}
