import { FAILURE, SUCCESS, LOADING, GET_FEED_REQUEST } from './home.actions';

const intialState = {
  loading: false,
  error: null,
  feed: undefined,
};

export function GetFeedReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_FEED_REQUEST + LOADING:
      oldState.loading = true;
      return oldState;
    case GET_FEED_REQUEST + SUCCESS:
      oldState.feed = action.data;
      oldState.loading = false;
      return oldState;
    case GET_FEED_REQUEST + FAILURE:
      oldState.loading = false;
      oldState.error = action.error;
      return oldState;
    default:
      return state;
  }
}
