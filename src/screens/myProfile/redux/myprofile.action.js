export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const SAGA = 'SAGA';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const getProfile = (data) => ({
  type: GET_PROFILE_REQUEST + SAGA,
  payload: data,
});
