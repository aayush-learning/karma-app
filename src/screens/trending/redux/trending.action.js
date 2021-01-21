export const GET_TRENDING_REQUEST = 'GET_TRENDING_REQUEST';
export const SAGA = 'SAGA';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const getSearchResult = (data) => ({
  type: GET_TRENDING_REQUEST + SAGA,
  payload: data,
});
