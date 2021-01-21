export const GET_MY_PORTFOLIO = 'GET_MY_PORTFOLIO';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const SAGA = 'SAGA';

export const getMyPortfolio = (userId = 2) => ({
  type: GET_MY_PORTFOLIO + SAGA,
  payload: userId,
});

export const getUserById = (userId) => ({
  type: GET_USER_BY_ID + SAGA,
  payload: userId,
});
