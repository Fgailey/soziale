import React from 'react';
import PropTypes from 'prop-types';
import PostsDashboard from '../../components/posts/PostsDashboard';
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
      <div className='card col-5 blue'>
        <div className='row'>
          <div className='card'></div>
          <div className='row'>
            <div className='col-6 '>
              <img
                src={avatar}
                alt=''
                className='img-thumbnail ml-2 my-2 aqua-gradient rounded-circle'
              />
            </div>
            <div className='col-6 pt-5 pl-5 align-bottom'>
              <div className='row details'>
                <h2 className='prim'>Age: </h2>
                <h3 className='mt-1'>{age}</h3>
              </div>
              <div className='row details'>
                <h2 className='prim'>Location: </h2>
                <h3 className='mt-1'>{current_city}</h3>
              </div>
              <div className='row details'>
                <h2 className='prim'>Gender: </h2>
                <h3 className='mt-1'>{gender}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2 className='prim'>About: </h2>
            <h3 className='mt-1'>{about_me}</h3>
          </div>
        </div>
        <div className='row p-2 green'>
          <div className='card col-12'>following/followers</div>
        </div>
      </div>
      <div className='col-7'>
        <div className='card col-12 h-100'>
          <PostsDashboard />
        </div>
      </div>
    </div>
    
  );
};

ProfileUser.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileUser;
