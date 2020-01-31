import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/Auth';

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link className='nav-item nav-link' to='/chat'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-comments' />
          Chat
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/profile'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-users' />
          Profile
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/dashboard'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-door-open' />> Dashboard
        </button>
      </Link>
      <a className='nav-item nav-link' onClick={logout} href='/'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-sign-out-alt' />
          Log out
        </button>
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className='nav-item nav-link' to='/profile'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-users' />
          Profile
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/login'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-sign-in-alt' />
          Login
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/register'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-user-plus' />
          Register
        </button>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light aqua-gradient'>
        <Link className='navbar-brand font-weight-bold reachLogo' to='/'>
          <i className='fas fa-share' />
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
              <button
                type='button'
                className='btn btn-outline-black btn-sm waves-effect'
              >
                <i className='fas fa-home' />
                Home
              </button>{' '}
              <span className='sr-only'>current</span>
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
