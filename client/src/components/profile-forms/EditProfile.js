import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/Profile';
import Alert from '../../pages/Alert';

const EditProfile = ({
  getCurrentProfile,
  createProfile,
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

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      age: !profile.age || loading ? '' : profile.age,
      current_city:
        !profile.current_city || loading ? '' : profile.current_city,
      from_city: !profile.from_city || loading ? '' : profile.from_city,
      // birthday: !profile.birthday || loading ? '' : profile.birthday,
      interests:
        !profile.interests || loading ? '' : profile.interests.join(','),
      gender: !profile.gender || loading ? '' : profile.gender,
      about_me: !profile.about_me || loading ? '' : profile.about_me
    });
  }, [loading, getCurrentProfile]);

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
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <div className='container my-5 p-5'>
        <div className='card darkBGcolor border-0'>
          <div className='text-center'>
            <h1 className='large prim p-4'>
              Edit Your Profile
              <i className='ml-2 fas fa-user-edit'></i>
            </h1>
            <Alert />
            <small className='prim'>* = required field</small>
            <form className='form pb-5' onSubmit={e => onSubmit(e)}>
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
                <small className='form-text prim'>Select Gender</small>
                <select
                  name='gender'
                  value={gender}
                  onChange={e => onChange(e)}
                >
                  <option value={0}>* Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Dragon'>Dragon</option>
                </select>
              </div>
              <div className='form-group'>
                <small className='form-text prim'>Where you at, dog?</small>
                <input
                  type='text'
                  placeholder='Current City'
                  name='current_city'
                  value={current_city}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <small className='form-text prim'>
                  Where did you come from, Cotton-Eyed Joe?
                </small>
                <input
                  type='text'
                  placeholder='Hometown'
                  name='from_city'
                  value={from_city}
                  onChange={e => onChange(e)}
                />
              </div>

              <div className='form-group'>
                <small className='form-text prim'>
                  Tell us a little about yourself
                </small>
                <textarea
                  placeholder='A short bio of yourself'
                  name='about_me'
                  value={about_me}
                  onChange={e => onChange(e)}
                />
              </div>

              <div className='form-group'>
                <small className='form-text prim'>
                  Tell us a little about yourself
                </small>
                <textarea
                  placeholder='Hobbies or Interests?'
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
        </div>
      </div>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, createProfile })(
  withRouter(EditProfile)
);
