// Individual profile
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './profileItem.css';

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
      <div className='card mx-5 my-5 morpheus-den-gradient'>
        <div className='row'>
          <div className='profile-info col text-center mx-4 my-4'>
            <img
              className='img-thumbnail w-25 float-left'
              src={`/uploads/${avatar}`}
              alt=''
            />
            <div className='ml-4 mt-3'>
              <h2>{name}</h2>
              <p>Age: {age}</p>
              <p>Location: {current_city}</p>
            </div>
          </div>

          <div className='interests col mt-5'>
            <h5>Some of {name}'s interests include: </h5>
            <ul>
              {interests.slice(0, 4).map((interest, index) => (
                <li key={index} className='text=primary'>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link to={`/profile/${_id}`} className='btn blue-gradient btn-rounded'>
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
