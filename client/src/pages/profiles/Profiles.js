import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../loadingGif/Loader';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/Profile';
import './profiles.css';
import Footer from '../../components/footer/Footer'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='text-center pt-3 white-text' id='profilesHeader'>
            <h1 className='prim'>
              <i className='fas fa-user-injured'></i> User Profiles
            </h1>
            <h4 className='sec'>See what others are up to</h4>
          </div>
          <div className='aqua-gradient' id='borderBottom'></div>

          <div className='container' id='profilesContainer'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
      <Footer/>
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
