import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/Auth';
import Alert from './Alert';
import Footer from '../components/footer/Footer'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='container my-5'>
        <div className='card'>
          {/* Default form login */}
          <form
            className='text-center border border-light p-5'
            action='#!'
            onSubmit={e => onSubmit(e)}
          >
            <Alert />
            <p className='h4 mb-4'>Sign in</p>
            {/* Email */}
            <input
              type='email'
              id='defaultLoginFormEmail'
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
              id='defaultLoginFormPassword'
              className='form-control mb-4'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              // minLength='6'
            />
            {/* Sign in button */}
            <button className='btn btn-info btn-block my-4' type='submit'>
              Sign in
            </button>
            {/* Register */}
            <p>
              Not a member?
              <Link to='/register'> Register</Link>
            </p>
          </form>
          {/* Default form login */}
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
