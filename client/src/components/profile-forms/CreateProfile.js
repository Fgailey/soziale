import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/Profile';

const CreateProfile = ({ createProfile, history }) => {
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

  return (
    <Fragment>
      <div className='text-center'>
        <h1 className='large text-primary'>Create Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Tell us how it be like...
        </p>
        <small>* = required field</small>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <small className='form-text'>Select Age*</small>
          <input
            type='number'
            min={1}
            max={100}
            placeholder={18}
            value={age}
            onChange={e => onChange(e)}
          />
          <div className='form-group'>
            <small className='form-text'>Select Gender</small>
            <select name='gender' value={gender} onChange={e => onChange(e)}>
              <option value={0}>* Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Dragon'>Dragon</option>
            </select>
          </div>
          <div className='form-group'>
            <small className='form-text'>Where you at, dog?</small>
            <input
              type='text'
              placeholder='Current City'
              name='company'
              value={current_city}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <small className='form-text'>
              Where did you come from, Cotton-Eyed Joe?
            </small>
            <input
              type='text'
              placeholder='Hometown'
              name='website'
              value={from_city}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <small className='form-text'>Tell us a little about yourself</small>
            <textarea
              placeholder='A short bio of yourself'
              name='about_me'
              value={about_me}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <small className='form-text'>Tell us a little about yourself</small>
            <textarea
              placeholder='A short bio of yourself'
              name='interests'
              value={interests}
              onChange={e => onChange(e)}
            />
          </div>

          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
