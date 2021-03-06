import axios from 'axios';
import { GET_PROFILES, GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER } from './types';

/*
  We use axios to call our back-end server and then will give the data of a profile
  to the payload if it exists into the reducer, but if there is an error we just return an empty object
  because technically a user does not have to have profile data. We want them to be able to
  add data if it doesn't exist not just error out on them.
*/
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get('/api/profile')
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
    )
    // Dashboard will render differently because they don't have anything in profile yet.
    .catch(err => dispatch({
      type: GET_PROFILE,
      payload: {}
    }))
}

/*
  This will be called within createProfile.js and will fetch the api
  point to create a profile and then if successful push the user back
  to their mainpage. If not we will get the errors that caused it to fail.
*/
export const createUserProfile = (profileData, history) => dispatch => {
  axios.post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

/*
  Called when the user attempts to look at all his fellow developers working
  on the project. When successfully grabbing the data, it was respond with the
  data.
*/
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get('/api/profile/all')
    .then(res => dispatch({
      type: GET_PROFILES,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_PROFILES,
      payload: null
    }));
}

/*
  This will be called when the user has added their experience.
*/
export const addExperience = (experienceData, history) => dispatch => {
  axios.post('/api/profile/experience', experienceData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

/*
  Contacts the back-end route with the educationData the user supplied and then redirects
  to dashboard if successful.
*/
export const addUserEducation = (educationData, history) => dispatch => {
  axios.post('/api/profile/education', educationData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

/*
  This function will hrab the experience using the id from the array and delete it on the server side.
*/
export const deleteExperience = id => dispatch => {
  axios.delete(`/api/profile/experience/${id}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

/*
  Will grab the id of the education in the array and delete it from the server side.
*/
export const deleteEducation = id => dispatch => {
  axios.delete(`/api/profile/education/${id}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

/*
  Will be called when the user has confirmed to delete their account on the dashboard.
  The user will be logged out and their payload will be an empty object deleting them 
  from the system and all of their data.
*/
export const deleteAccount = () => dispatch => {
  axios
    .delete('/api/profile')
    .then(res => dispatch({
      type: SET_CURRENT_USER,
      payload: {}
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

// When called, it will give the correct type for the reducer to change state.
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}