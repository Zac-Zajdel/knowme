import { GET_PROFILES, PROFILE_LOADING, GET_PROFILE, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  loading: false
}

// Helps loads to profile with the payload
export default function (state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      }
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      }
    default:
      return state;
  }
}

// This is a basic setup of all reducers for future reference
// export default function (state = initialState, action) {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }