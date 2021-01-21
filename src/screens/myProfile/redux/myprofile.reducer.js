import { FAILURE, SUCCESS, LOADING, GET_PROFILE_REQUEST } from './myprofile.action';

const intialState = {
  loading: false,
  error: null,
  profileData: undefined,
};

export function GetProfileReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_PROFILE_REQUEST + LOADING:
      oldState.loading = true;
      return oldState;
    case GET_PROFILE_REQUEST + SUCCESS:
      oldState.profileData = action.data;
      oldState.loading = false;
      return oldState;
    case GET_PROFILE_REQUEST + FAILURE:
      oldState.loading = false;
      oldState.error = action.error;
      return oldState;
    default:
      return state;
  }
}
