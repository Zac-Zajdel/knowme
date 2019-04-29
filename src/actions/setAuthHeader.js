import axios from 'axios';

/*
  This will set the authorization header that we had to manually apply in 
  Postman everytime automatically as long as a token is provided.
*/
const setAuthHeader = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete the header if token isn't there.
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthHeader;