import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/Profile';
import Alert from '../../pages/Alert';

const CreateProfile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    age: '',
    current_city: '',
    from_city: '',
    // birthday: '',
    interests: '',
    gender: '',
    about_me: ''
  });

  const {
    age,
    current_city,
    from_city,
    // birthday,
    interests,
    gender,
    about_me
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Redirect to='/dashbaord' />
  ) : (
    <Fragment>
      <div className='text-center'>
        <h1 className='large text-primary'>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Tell us how it be like...
        </p>
        <Alert />
        <small className='prim'>* = required field</small>
        <form className='form-group pb-5' onSubmit={e => onSubmit(e)}>
          <small className='form-text prim'>Select Age*</small>
          <input
            name='age'
            type='number'
            min={1}
            max={100}
            placeholder={18}
            value={age}
            onChange={e => onChange(e)}
          />
          <div className='form-group'>
            <div className='form-group'>
              <small className='form-text prim'>Gender?</small>
              <input
                type='text'
                placeholder='Gender'
                name='gender'
                value={gender}
                onChange={e => onChange(e)}
              />
            </div>
          </div>
          <div className='form-group'>
            <small className='form-text prim'>Current Location?</small>
            <input
              type='text'
              placeholder='Current City'
              name='current_city'
              value={current_city}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <small className='form-text prim'>Hometown?</small>
            <input
              type='text'
              placeholder='Hometown'
              name='from_city'
              value={from_city}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <small className='form-text prim'>Interests?</small>
            <textarea
              className='w-50'
              placeholder='Hobbies or Interests?'
              name='interests'
              value={interests}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <small className='form-text prim'>
              Tell us a little about yourself...
            </small>
            <textarea
              className='w-50'
              placeholder='A short bio of yourself'
              name='about_me'
              value={about_me}
              onChange={e => onChange(e)}
            />
          </div>

          <input type='submit' className='btn btn-primary my-1 aqua-gradient' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
