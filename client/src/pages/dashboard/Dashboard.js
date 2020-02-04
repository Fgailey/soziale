import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/Profile';
import Loader from '../loadingGif/Loader';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Alert from '../Alert';
=======
import ModalPage from '../../components/modal/vidyoModal'
import VidyoConnector  from '../vidyo'
>>>>>>> vidyo modal
=======

>>>>>>> workin workin
=======
import ModalPage from '../../components/modal/vidyoModal'
>>>>>>> struggles

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Loader />
  ) : (
    
    <Fragment>
      <div className='container my-5'>
        <div className='card p-5'>
          {/* Logged in user greeting */}
          <h1>Welcome, {user && user.name}</h1>
          <Alert />

<<<<<<< HEAD
<<<<<<< HEAD
          <div className='row mx-1'>
            <div className='col-lg-6 mb-4'>
              {/* Card */}
              <div
                className='card card-image'
                style={{
                  backgroundImage:
                    'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
                }}
              >
                {/* Content */}
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                  <div>
                    <h5 className='pink-text'>
                      <i className='fas fa-chart-pie' /> Marketing
                    </h5>
                    <h3 className='card-title pt-2'>
                      <strong>This is the card title</strong>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!.
                    </p>
                    <Link to='#!' className='btn btn-pink'>
                      <i className='fas fa-clone left' /> View project
                    </Link>
=======
                
=======
                <ModalPage/>
>>>>>>> struggles

            <div className='row mx-1'>
              <div className='col-lg-6 mb-4'>
                {/* Card */}
                <div
                  className='card card-image'
                  style={{
                    backgroundImage:
                      'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
                  }}
                >
                  {/* Content */}
                  <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                    <div>
                      <h5 className='pink-text'>
                        <i className='fas fa-chart-pie' /> Marketing
                      </h5>
                      <h3 className='card-title pt-2'>
                        <strong>This is the card title</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat fugiat, laboriosam, voluptatem, optio
                        vero odio nam sit officia accusamus minus error nisi
                        architecto nulla ipsum dignissimos. Odit sed qui,
                        dolorum!.
                      </p>
                      <Link to='#!' className='btn btn-pink'>
                        <i className='fas fa-clone left' /> View project
                      </Link>
                    </div>
>>>>>>> workin workin
                  </div>
                </div>
<<<<<<< HEAD
=======
                {/* Card */}
                      
                

                {profile !== null ? (
                  <Fragment>has profile</Fragment>
                ) : (
                  <Fragment>
                    <div>
                      <p>Your profile has not been created.. Yet!</p>
                      <Link to='/create-profile' className='btn btn-green'>
                        CREATE PROFILE
                          
                      </Link>
                    </div>
                  </Fragment>
                )}
>>>>>>> vidyo modal
              </div>
              {/* Card */}

              {profile !== null ? (
                <Fragment>has profile</Fragment>
              ) : (
                <Fragment>
                  <div>
                    <p>Your profile has not been created.. Yet!</p>
                    <Link to='/create-profile' className='btn btn-green'>
                      CREATE PROFILE
                    </Link>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
    
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
