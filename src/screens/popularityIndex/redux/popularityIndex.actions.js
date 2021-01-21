export const GET_CELEBRITY_STOCK_LIST_REQUEST = 'GET_CELEBRITY_STOCK_LIST_REQUEST';
export const GET_CELEBRITY_STOCK_CATEGORY_REQUEST = 'GET_CELEBRITY_STOCK_CATEGORY_REQUEST';
export const FAILURE = 'FAILURE';
export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const SAGA = 'SAGA';
export const SHOW_BUY_SELL_MODAL = 'SHOW_BUY_SELL_MODAL';

export const showBuySellModal = ({ isShowBuySellModal, buySellPropsData = '' }) => ({
  type: SHOW_BUY_SELL_MODAL,
  payload: { isShowBuySellModal, buySellPropsData },
});
export const getCelebrityStockList = (categoryId = {}) => ({
  type: GET_CELEBRITY_STOCK_LIST_REQUEST + SAGA,
  payload: { categoryId },
});

export const getCelebrityStockCetgories = (isGetStockList = false) => ({
  type: GET_CELEBRITY_STOCK_CATEGORY_REQUEST + SAGA,
  payload: { isGetStockList },
});
