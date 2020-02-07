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
    <div className='container'>
      <div className='card mx-5 my-5'>
        <div className='row'>
          <div className='profile-item col-4 ml-4'>
            <img
              className='img-thumbnail w-25 float-left'
              src={`/uploads/${avatar}`}
              alt=''
            />
            <div>
              <h2>{name}</h2>
              <p>Age: {age}</p>
              <p>Location: {current_city}</p>
            </div>
          </div>

          <div className='col-4'>
            <ul>
              {interests.slice(0, 4).map((interest, index) => (
                <li key={index} className='text=primary'>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link to={`/profile/${_id}`} className='btn btn-primary col-6'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
