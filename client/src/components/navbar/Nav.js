import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/Auth';

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link className='nav-item nav-link mr-1' to='/chat'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-comments mr-1' />
          Chat
        </button>
      </Link>
      <Link className='nav-item nav-link mr-1' to='/video-chat'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-video mr-1' />
          Video Chat
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/profiles'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-users mr-1' />
          Profiles
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/posts'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-clipboard mr-1' />
          Post
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/dashboard'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-door-open mr-1' />
          Dashboard
        </button>
      </Link>
      <a className='nav-item nav-link' onClick={logout} href='/'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-sign-out-alt mr-1' />
          Log out
        </button>
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className='nav-item nav-link' to='/login'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-sign-in-alt mr-1' />
          Login
        </button>
      </Link>
      <Link className='nav-item nav-link' to='/register'>
        <button
          type='button'
          className='btn btn-outline-black btn-sm waves-effect'
        >
          <i className='fas fa-user-plus mr-1' />
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
        <div
          className='collapse navbar-collapse d-flex justify-content-end'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav'>
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
