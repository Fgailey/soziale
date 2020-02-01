import axios from 'axios';
import { setAlert } from './Alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  CLEAR_PROFILE
} from './Types';

// Get logged in users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all profiles
export const getProfiles = () => async dispatch => {
  // clear previous user's profile from DOM before dispatching GET_PROFILE on current user
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get('/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create/Update profile
export const createProfile = (
  formData,
  // history object has push() method to redirect to client side route
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
