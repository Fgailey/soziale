import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../actions/Alert';
import { register } from '../actions/Auth';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Footer from '../components/footer/Footer'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container my-5'>
        <div className='card'>
          {/* Default form register */}
          <form
            className='text-center border border-light p-5'
            action='#!'
            onSubmit={e => onSubmit(e)}
          >
            <Alert />
            <p className='h4 mb-4'>New User</p>
            {/* Name */}
            <input
              type='text'
              id='defaultRegisterFormFirstName'
              className='form-control mb-4'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              // required
            />
            {/* E-mail */}
            <input
              type='email'
              id='defaultRegisterFormEmail'
              className='form-control mb-4'
              placeholder='E-mail'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              // required
            />
            {/* Password */}
            <input
              type='password'
              id='defaultRegisterFormPassword'
              className='form-control'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              // minLength='6'
              aria-describedby='defaultRegisterFormPasswordHelpBlock'
            />
            <small
              id='defaultRegisterFormPasswordHelpBlock'
              className='form-text text-muted mb-4'
            >
              At least 6 characters
            </small>
            {/* Password2 */}
            <input
              type='password'
              id='defaultRegisterFormPassword'
              className='form-control'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={e => onChange(e)}
              // minLength='6'
              aria-describedby='defaultRegisterFormPhoneHelpBlock'
            />
            <small
              id='defaultRegisterFormPhoneHelpBlock'
              className='form-text text-muted mb-4'
            >
              For your health
            </small>
            {/* Sign up button */}
            <button className='btn btn-info my-4 btn-block' type='submit'>
              Register
            </button>
          </form>
          {/* Default form register */}
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
