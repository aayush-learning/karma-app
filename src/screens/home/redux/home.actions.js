export const GET_FEED_REQUEST = 'GET_FEED_REQUEST';
export const SAGA = 'SAGA';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const getFeed = (data) => ({
  type: GET_FEED_REQUEST + SAGA,
  payload: data,
});
