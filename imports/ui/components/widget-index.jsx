import React from 'react';

import { WidgetItem } from './widget-item';

export class WidgetIndex extends React.Component {
  render() {
    return (
      <div>
        { this.props.widgets.map( (widget) => <WidgetItem {...widget} key={widget._id}/> ) }
      </div>
    );
  }
}
