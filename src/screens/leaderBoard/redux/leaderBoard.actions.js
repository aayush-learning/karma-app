export const GET_LEADERBOARD_REQUEST = 'GET_LEADERBOARD_REQUEST';
export const SAGA = 'SAGA';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const getLeaderboard = (data) => ({
  type: GET_LEADERBOARD_REQUEST + SAGA,
  payload: data,
});
