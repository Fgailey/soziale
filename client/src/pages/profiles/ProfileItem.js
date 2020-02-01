// Individual profile
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    age,
    current_city,
    interests,
    date
  }
}) => {
  return (
    <div className='profile-item'>
      <img src={avatar} alt='' />
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Location: {current_city}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {interests.slice(0, 4).map((interest, index) => (
          <li key={index} className='text=primary'>
            {interest}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
