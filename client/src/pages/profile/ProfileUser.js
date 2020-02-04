import React from 'react';
import PropTypes from 'prop-types';

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
    <div className='card pl-5 pr-5 py-5 text-center'>
      {/* Logged in user greeting */}

      <div className='row mx-1'>
        <div className='col-lg-12 mb-4'>
          {/* Card */}
          <div className='card mt-2 '>
            {/* Content */}
            <div className='text-white d-flex align-items-center rgba-black-strong py-5 px-4'>
              <div>
                <h2 className='pink-text'>{name}</h2>
                <h3 className='card-title pt-2'>
                  "The devil fears a hungry man"
                </h3>
                <hr />
                <div className='col-12'>
                  <img
                    className='img-thumbnail w-25 float-left'
                    src='https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    alt=''
                  />
                </div>
                <ul>
                  <li>
                    <h4>Gender: {gender}</h4>
                  </li>
                  <li>
                    <h4>Age: {age}</h4>
                  </li>
                  <li>
                    <h4>Location: {current_city}</h4>
                  </li>
                  <li>
                    <h4>About: {about_me}</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <div className='col-6 blue friends'>friends</div>
              <div className='col-6 red interests'>interests</div>
            </div>
          </div>
          {/* Card */}
        </div>
      </div>
    </div>
  );
};

ProfileUser.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileUser;
