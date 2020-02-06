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
      <div className='card mx-5 my-5' id='profileItemCard'>
        <div className='row'>
          <div className='profile-info col text-center mx-4 my-4'>
            <img
              className='img-thumbnail aqua-gradient w-25 ml-5 rounded-circle'
              src={avatar}
              alt=''
            />
            <div className='ml-4 mt-3'>
              <h2 className='prim'>{name}</h2>
              <p className='sec'>Age: {age}</p>
              <p className='sec'>Location: {current_city}</p>
            </div>
          </div>

          <div className='interests col mt-5'>
            <h5 className='prim'>{name}'s interests: </h5>
            <ul>
              {interests.slice(0, 4).map((interest, index) => (
                <li key={index} className='text=primary sec'>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link to={`/profile/${_id}`} className='btn aqua-gradient btn-rounded'>
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
