import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/Auth';

const Nav = ( {logout} ) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top font-weight-bold blue-gradient">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">current</span></Link>
            <Link className="nav-item nav-link" to="/chat">Chat</Link>
            <Link className="nav-item nav-link" to="/profile">Profile</Link>
            <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <a className="nav-item nav-link" onClick={logout} href='#!'>Log out</a>
            <Link className="nav-item nav-link" to="/register">Register</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect( mapStateToProps,{logout} )(Nav);