import React from 'react';

import { WidgetForm } from './widget-form';
import { WidgetItem } from './widget-item';

export class WidgetIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>Widgets</h1>
        <WidgetForm createWidget={this.props.createWidget}/>
        <p>{this.props.banana}</p>
        { this.props.widgets.map( (widget) => <WidgetItem {...widget} key={widget._id}/> ) }
      </div>
    );
  }
}
