import { GET_MY_PORTFOLIO, FAILURE, LOADING, SUCCESS } from './profile.actions';

const initialState = {
  myPortfolio: [],
  loading: false,
  profileError: {},
};

export function profileReducer(state = initialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_MY_PORTFOLIO + LOADING:
      oldState.loading = true;
      return oldState;
    case GET_MY_PORTFOLIO + SUCCESS:
      oldState.loading = false;
      oldState.myPortfolio = action.data;
      console.log('this is in the reducer', action.data);
      return oldState;
    case GET_MY_PORTFOLIO + FAILURE:
      oldState.loading = false;
      oldState.profileError = action.error;
      return oldState;
    default:
      return state;
  }
}
