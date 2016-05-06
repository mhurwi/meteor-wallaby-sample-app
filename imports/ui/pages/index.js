import React from 'react';
import { Meteor } from 'meteor/meteor'
export const Index = React.createClass({
  render() {
    return (
      <div>
          <h2>Index</h2>
          <p>{Meteor.user().emails[0].address}</p>
      </div>
    );
  },
});
