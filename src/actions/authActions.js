import axios from 'axios';
import setAuthHeader from '../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS } from './types';
import { SET_CURRENT_USER } from './types';

/* Calls the backend route and registers the user through the action.
  Push the user to the login page once they have registered successfully.
  If an error occurs, we get the payload which will be the response from the server.
*/
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

/*
  Sends the user data from the users/login route to verify.
  We then grab the token from the data and set it into localStorage
  so then we can have a valid session. We finally have to decode the 
  web token as long as it is valid and then we have to set the current
  user that is logged in based on the userData inside the token.
*/
export const loginUser = userData => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthHeader(token);
      // Decode the token to get the user's data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Set loggin in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

/*
  First we will need to remove the jwtToken from application.
  Second the we pass in a false value to remove the auth header.
  Finally, we set the current user to an empty object which will
  make isAuthenticated to be false which logs the user out.
*/
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthHeader(false);
  dispatch(setCurrentUser({}));
}