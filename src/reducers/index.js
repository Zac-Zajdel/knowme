import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

/*
  This is our root reducer where ever reducer passes through.
*/
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});