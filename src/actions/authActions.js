import axios from 'axios';
import { GET_ERRORS } from './types';

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
    })
    );
}