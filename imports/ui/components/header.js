import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Header = ({user, logout}) => {

  function userNav() {
    return (
      <div>
        <IndexLink to="/dashboard" activeClassName="active">Dashboard</IndexLink>
        {" | "}
        <Link to="#" className="logout-button" onClick={logout}>Logout</Link>
      </div>
    )
  }

  function guestNav() {
    return (
      <div>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/login">Login</Link>
      </div>
    )
  }

  return (
    <nav>
      { user ? userNav() : guestNav() }
    </nav>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired
};

export default Header;
