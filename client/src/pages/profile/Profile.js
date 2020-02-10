import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../loadingGif/Loader';
import { getProfilesById } from '../../actions/Profile';
import { Link } from 'react-router-dom';
import ProfileUser from './ProfileUser';
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
            <ProfileUser profile={profile} />
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
