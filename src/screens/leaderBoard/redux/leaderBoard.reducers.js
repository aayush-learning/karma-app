import { FAILURE, SUCCESS, LOADING, GET_LEADERBOARD_REQUEST } from './leaderBoard.actions';

const intialState = {
  loading: false,
  error: null,
  leaderboardData: undefined,
};

export function LeaderboardReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_LEADERBOARD_REQUEST + LOADING:
      oldState.loading = true;
      return oldState;
    case GET_LEADERBOARD_REQUEST + SUCCESS:
      oldState.leaderboardData = action.data;
      oldState.loading = false;
      return oldState;
    case GET_LEADERBOARD_REQUEST + FAILURE:
      oldState.loading = false;
      oldState.error = action.error;
      return oldState;
    default:
      return state;
  }
}
