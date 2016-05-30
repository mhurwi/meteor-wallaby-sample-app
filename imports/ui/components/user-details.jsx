import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const UserDetails = ({user}) => {
  const email = user && user.emails ? user.emails[0].address : 'User has not been loaded...';

  return (
    <Row>
      <Col xs={ 12 }>
        <h4 className="page-header">User Details</h4>
        <p className="user-email">{ email }</p>
      </Col>
    </Row>
 )
};

export default UserDetails;
