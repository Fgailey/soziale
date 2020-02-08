import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/Profile';
import Loader from '../loadingGif/Loader';
import Alert from '../Alert';
import Footer from '../../components/footer/Footer';
import PostsDashboard from '../../components/posts/PostsDashboard';

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

          {profile !== null ? (
            <Fragment>
              {/* Card */}
              <div className='row'>
                <div className='card col-5 blue'>
                  <div className='row'>
                    <div className='card'></div>
                    <div className='row'>
                      <div className='col-6 '>
                        <img
                          src={user.avatar}
                          alt=''
                          className='img-thumbnail ml-2 my-2 aqua-gradient rounded-circle'
                        />
                      </div>
                      <div className='col-6 pt-5 pl-5 align-bottom'>
                        <div className='row details'>
                          <h2 className='prim'>Age: </h2>
                          <h3 className='mt-1'>{profile.age}</h3>
                        </div>
                        <div className='row details'>
                          <h2 className='prim'>Location: </h2>
                          <h3 className='mt-1'>{profile.current_city}</h3>
                        </div>
                        <div className='row details'>
                          <h2 className='prim'>Gender: </h2>
                          <h3 className='mt-1'>{profile.gender}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>about</div>
                  </div>
                  <div className='row p-2 green'>
                    <div className='card col-12'>following/followers</div>
                  </div>
                </div>
                <div className=' card col-7 p-2'>
                  <PostsDashboard />
                </div>
              </div>
              {/* Card */}
            </Fragment>
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
      <Footer />
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
