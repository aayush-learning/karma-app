export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const SAGA = 'SAGA';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const userLogin = (data) => ({
  type: USER_LOGIN_REQUEST + SAGA,
  payload: data,
});
