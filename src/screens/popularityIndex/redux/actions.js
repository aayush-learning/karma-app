export const GET_CELEBRITY_STOCK_LIST_REQUEST = 'GET_CELEBRITY_STOCK_LIST_REQUEST';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const SAGA = 'SAGA';

export const getCelebrityStockList = (categoryId = {}) => ({
  type: GET_CELEBRITY_STOCK_LIST_REQUEST + SAGA,
  payload: { categoryId },
});
