import { FAILURE, SUCCESS, LOADING, USER_LOGIN_REQUEST } from './login.actions';

const intialState = {
  loading: false,
  error: null,
  userCredentials: undefined,
};

export function UserLoginReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case USER_LOGIN_REQUEST + LOADING:
      oldState.loading = true;
      return oldState;
    case USER_LOGIN_REQUEST + SUCCESS:
      oldState.userCredentials = action.data;
      oldState.loading = false;
      return oldState;
    case USER_LOGIN_REQUEST + FAILURE:
      oldState.loading = false;
      oldState.error = action.error;
      return oldState;
    default:
      return state;
  }
}
