import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const UserDetails = React.createClass({
  render() {
    return (
      <Row>
        <Col xs={ 12 }>
          <h4 className="page-header">User Details</h4>
          <p className="user-email">{ this.props.user.emails[0].address }</p>
        </Col>
      </Row>
   )
  }
});
