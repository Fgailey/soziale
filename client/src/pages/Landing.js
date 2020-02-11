import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../components/footer/Footer';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <div className='container my-5 text-center'>
        {/* <h1 className='font-weight-bold'>Hello</h1> <br />
          <h1 className='font-weight-bold'>Welcome to Reach</h1> <br />
          <h1 className='font-weight-bold'>
            The worlds fastest growing soical media app.
          </h1>{' '}
          <br /> */}
        {/* Jumbotron */}
        <div className='card card-image landing'>
          <div className='text-white text-center rgba-stylish-strong py-5 px-4'>
            <div className='py-5'>
              {/* Content */}
              <h1 className='orange-text'>
                <i className='fas fa-share' />Reach
              </h1>
              <h2 className='card-title h2 my-4 py-2'>
                The next big social networking site.
              </h2>
              <p className='mb-4 pb-2 px-md-5 mx-md-5'>
                Scroll down to find out what makes Reach so special. 
              </p>
              <Link to='/login' className='btn peach-gradient'>
                <i className='fas fa-sign-in-alt mr-1' />
                Log In
              </Link>
              <Link to='/register' className='btn peach-gradient'>
                <i className='fas fa-user-plus mr-1' />
                Register
              </Link>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
        {/* Features */}
        <div className='container pt-5 mt-5 z-depth-1 darkBGcolor'>
          <section className='p-md-3 mx-md-5 text-lg-left'>
            <div className='row d-flex justify-content-center'>
              <h2 className='prim font-weight-bold pb-4'>Features</h2>
            </div>
            <div className='row text-center d-flex justify-content-center mt-4'>
              <div className='col-lg-4 col-md-6 mb-5'>
                <i className='fas fa-video indigo-text fa-3x mb-4' />
                <h4 className='sec font-weight-bold mb-4'>Video Chat</h4>
                <p className='text-muted px-2 mb-lg-0'>
                  Live video messaging, mulitple user chat rooms, screen sharing. Ali fill in the rest.
                </p>
              </div>
              <div className='col-lg-4 col-md-6 mb-5'>
                <i className='fas fa-comments pink-text fa-3x mb-4' />
                <h4 className='sec font-weight-bold mb-4'>1 on 1 Chat</h4>
                <p className='text-muted px-2 mb-lg-0'>
                  Text messaging, private one on one chat rooms. Foster fill in the rest.
                </p>
              </div>
              <div className='col-lg-4 col-md-6 mb-5'>
                <i className='fas fa-users deep-orange-text fa-3x mb-4' />
                <h4 className='sec font-weight-bold mb-4'>Social Networking</h4>
                <p className='text-muted px-2 mb-md-0'>
                  Make a profile, and make posts. View and comment on other users post. Bijan help a brother out.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Features */}
      </div>
      <Footer />
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
