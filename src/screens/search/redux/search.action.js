export const GET_SEARCH_RESULT_REQUEST = 'GET_SEARCH_RESULT_REQUEST';
export const SAGA = 'SAGA';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';

export const getSearchResult = (data) => ({
  type: GET_SEARCH_RESULT_REQUEST + SAGA,
  payload: data,
});
