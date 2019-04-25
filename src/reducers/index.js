import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

/*
  This is our root reducer where ever reducer passes through.
*/
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});