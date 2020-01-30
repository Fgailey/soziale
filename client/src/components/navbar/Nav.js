import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/Auth';

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link className='nav-item nav-link' to='/chat'>
        Chat
      </Link>
      <Link className='nav-item nav-link' to='/profile'>
        Profile
      </Link>
      <Link className='nav-item nav-link' to='/dashboard'>
        Dashboard
      </Link>
      <a className='nav-item nav-link' onClick={logout} href='/'>
        Log out
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className='nav-item nav-link' to='/profile'>
        Profile
      </Link>
      <Link className='nav-item nav-link' to='/login'>
        Login
      </Link>
      <Link className='nav-item nav-link' to='/register'>
        Register
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark sticky-top font-weight-bold blue-gradient'>
        <Link className='navbar-brand' to='/'>
          Reach
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-item nav-link active' to='/'>
              Home <span className='sr-only'>current</span>
            </Link>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Nav);
