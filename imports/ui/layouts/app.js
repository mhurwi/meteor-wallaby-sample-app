import React from 'react';

export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return (
      <div>
          { this.props.children }
      </div>
    );
  },
});
