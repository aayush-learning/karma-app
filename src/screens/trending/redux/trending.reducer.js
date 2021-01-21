import { FAILURE, SUCCESS, LOADING, GET_TRENDING_REQUEST } from './trending.action';

const intialState = {
  loading: false,
  error: null,
  trendingData: undefined,
};

export function GetTrendingReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_TRENDING_REQUEST + LOADING:
      oldState.loading = true;
      return oldState;
    case GET_TRENDING_REQUEST + SUCCESS:
      oldState.trendingData = action.data;
      oldState.loading = false;
      return oldState;
    case GET_TRENDING_REQUEST + FAILURE:
      oldState.loading = false;
      oldState.error = action.error;
      return oldState;
    default:
      return state;
  }
}
