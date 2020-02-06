import React from 'react';
import PropTypes from 'prop-types';
// import './profileUser.css';


const ProfileUser = ({
  profile: {
    age,
    gender,
    current_city,
    about_me,
    user: { name, avatar }
  }
}) => {
  return (
    // maybe move this layout to dashboard route?
    <div className='row'>
      <div className='col-5 blue'>
        <div className='row p-5 red'>
          <div className='card col-12'>profile</div>
        </div>
        <div className='row p-5 green'>
          <div className='card col-12'>following/followers</div>
        </div>
      </div>
      <div className='col-7 p-5 purple'>
        <div className='card col-12'>user's posts</div>
      </div>
    </div>
    
  );
};

ProfileUser.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileUser;
