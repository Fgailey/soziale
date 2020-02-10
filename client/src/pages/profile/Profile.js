import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../loadingGif/Loader';
import { getProfilesById } from '../../actions/Profile';
import { Link } from 'react-router-dom';
import PostsProfile from '../../components/posts/PostsProfile';
import Alert from '../Alert';
import Footer from '../../components/footer/Footer';

const Profile = ({
  getProfilesById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfilesById(match.params.id);
  }, [getProfilesById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='row' id='profilesHeader'>
            <Link to='/profiles' className='btn aqua-gradient float-left'>
              <i className='black-text fas fa-arrow-left fa-3x'></i>
            </Link>

            <h1 className='prim mt-3 center'>{profile.user.name}</h1>

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link
                  to='/edit-profile'
                  className='btn dusty-grass-gradient float-right'
                >
                  <h5 className='black-text'>Edit Your Profile</h5>
                </Link>
              )}
          </div>
          <div className='aqua-gradient' id='borderBottom'></div>

          <Alert />
          <div className='container py-5 px-5' id='profileContainer'>
            <div className='row'>
              <div className='card dashboardCards col-md-5'>
                <div className='row'>
                  <div className='col-6 '>
                    <img
                      src={`/uploads/${profile.user.avatar}`}
                      alt=''
                      className='img-thumbnail ml-2 my-2 aqua-gradient rounded-circle'
                    />
                  </div>
                  <div className='col-6 pt-5 pl-5 align-bottom'>
                    <div className='row details'>
                      <h2 className='prim'>Age: </h2>
                      <h3 className='mt-1'>{profile.user.age}</h3>
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
                <div className='row'>
                  <div className='col-12'>
                    <h2 className='prim'>About: </h2>
                    <h3 className='mt-1'>{profile.about_me}</h3>
                  </div>
                </div>
                <div className='row'>
                  <div className='card col-12'>following/followers</div>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='card dashboardCards col-12'>
                  <PostsProfile />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
};

Profile.propTypes = {
  getProfilesById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfilesById })(Profile);
