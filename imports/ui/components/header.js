import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Header = ({user, logout}) => {

  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      { user ? <Link to="#" className="logout-button" onClick={logout}>Logout</Link> :
        <Link to="/login">Login</Link>
      }
    </nav>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};

export default Header;
