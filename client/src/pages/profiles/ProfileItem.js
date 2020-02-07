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
    date,
    about_me
  }
}) => {
  return (
    <div className='container'>
      <div className='card mx-5 my-5' id='profileItemCard'>
        <div className='row'>
          <div className='profile-info col text-center mx-4 my-4'>
            <h2 className='prim'>{name}</h2>
            <img
              className='img-thumbnail aqua-gradient w-25 rounded-circle'
              src={avatar}
              alt=''
            />
            <div className='mt-3 row'>
              <div className='col-6'>
                <h5 className='prim'>
                  Location: <p className='sec'>{current_city}</p>
                </h5>
              </div>
              <div className='col-6'>
                <h5 className='prim'>Interested In: </h5>
                {/* get rid of this ul and replace with first three joined interest */}
                <ul>
                  {interests.slice(0, 3).map((interest, index) => (
                    <li key={index} className='list-inline-item sec'>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='row'></div>
          </div>

          <div className='col mx-4 my-4'>
            <h2 className='prim'>
              About Me: <p className='sec '>{about_me}</p>
            </h2>
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
