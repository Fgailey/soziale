import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div>
      <div className='landing'>
        <div className='container pt-5 pb-5 text-center'>
          <h1 className='font-weight-bold'>Hello</h1> <br />
          <h1 className='font-weight-bold'>Welcome to Reach</h1> <br />
          <h1 className='font-weight-bold'>I love you</h1> <br />
          <iframe
            title='Intro Vid'
            width={560}
            height={315}
            src='https://youtube.com/embed/ZIFCWpn4qQ4'
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <div className='container text-center pb-5'>
          <Link to='/register' className='btn btn-pink'>
            <i className='fas fa-clone left' /> Sign Up!
          </Link>
          <Link to='/login' className='btn btn-pink'>
            <i className='fas fa-clone left' /> Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
