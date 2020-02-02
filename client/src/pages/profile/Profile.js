import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../loadingGif/Loader';
import { getProfilesById } from '../../actions/Profile';
import { Link } from 'react-router-dom';

const Profile = ({
  getProfilesById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfilesById(match.params.id);
  }, [getProfilesById]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn'>
            Go back
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn'>
                Edit Profile
              </Link>
            )}
          <div>
            <h2>{profile.user.name}</h2>
          </div>
        </Fragment>
      )}
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
