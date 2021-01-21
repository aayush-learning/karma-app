import {
  FAILURE,
  SUCCESS,
  GET_CELEBRITY_STOCK_LIST_REQUEST,
  LOADING,
  GET_CELEBRITY_STOCK_CATEGORY_REQUEST,
  SHOW_BUY_SELL_MODAL,
} from './popularityIndex.actions';

const intialState = {
  stockListData: [],
  stockCategories: [],
  userError: {},
  loading: false,
  stockDataLoading: false,
  isShowBuySellModal: false,
  buySellPropsData: {},
};

export function PopularityIndexReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_CELEBRITY_STOCK_LIST_REQUEST + LOADING:
      oldState.stockDataLoading = true;
      return oldState;
    case GET_CELEBRITY_STOCK_LIST_REQUEST + SUCCESS:
      oldState.stockListData = action.data;
      oldState.stockDataLoading = false;
      return oldState;
    case GET_CELEBRITY_STOCK_LIST_REQUEST + FAILURE:
      oldState.userError = action.error;
      oldState.stockDataLoading = false;
      return oldState;
    case GET_CELEBRITY_STOCK_CATEGORY_REQUEST + SUCCESS:
      oldState.stockCategories = action.data;
      oldState.loading = false;
      return oldState;
    case GET_CELEBRITY_STOCK_CATEGORY_REQUEST + FAILURE:
      oldState.userError = action.error;
      oldState.loading = false;
      return oldState;
    case SHOW_BUY_SELL_MODAL:
      oldState.isShowBuySellModal = action.payload.isShowBuySellModal;
      oldState.buySellPropsData = action.payload?.buySellPropsData;
      return oldState;
    default:
      return state;
  }
}
