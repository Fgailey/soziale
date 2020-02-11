import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/Profile';
import Loader from '../loadingGif/Loader';
import Alert from '../Alert';
import Footer from '../../components/footer/Footer';
import PostsDashboard from '../../components/posts/PostsDashboard';
import './dashboard.css';

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
      <div className='row text-center' id='profilesHeader'>
        <div className='col'>
          <h1 className='prim mt-2'>Welcome, {user && user.name}</h1>
          <h4 className='sec'>It's all about you here</h4>
        </div>
      </div>
      <div className='aqua-gradient' id='borderBottom'></div>

      <Alert />
      <div className='container py-5 px-5' id='profileContainer'>
        {profile !== null ? (
          <Fragment>
            {/* Card */}
            <div className='row'>
              <div className='card mediumBGcolor col-md-5'>
                <div className='row'>
                  <div className='col-6 '>
                    <img
                      src={`/uploads/${user.avatar}`}
                      alt=''
                      className='img-thumbnail ml-2 my-2 aqua-gradient rounded-circle'
                    />
                  </div>
                  <div className='col-6 pt-5 pl-5 align-bottom'>
                    <div className='row details'>
                      <h2 className='prim'>Age: </h2>
                      <h3 className='sec mt-1'>{profile.age}</h3>
                    </div>
                    <div className='row details'>
                      <h2 className='prim'>Location: </h2>
                      <h3 className='sec mt-1'>{profile.current_city}</h3>
                    </div>
                    <div className='row details'>
                      <h2 className='prim'>Gender: </h2>
                      <h3 className='sec mt-1'>{profile.gender}</h3>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h2 className='prim'>About: </h2>
                    <h3 className='sec mt-1'>{profile.about_me}</h3>
                  </div>
                </div>
                <div className='row'>
                  <div className='card col-12'>following/followers</div>
                  <Link
                    to='/edit-profile'
                    className='btn rounded dusty-grass-gradient mx-4 float-right mt-lg-3 mt-md-4'
                  >
                    <i className='black-text fa-3x fas fa-user-edit'></i>
                  </Link>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='card mediumBGcolor col-12'>
                  <PostsDashboard />
                </div>
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
