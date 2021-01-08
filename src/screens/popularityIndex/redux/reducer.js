import { FAILURE, SUCCESS, GET_CELEBRITY_STOCK_LIST_REQUEST, LOADING } from './actions';

const intialState = {
  stockListData: [],
  userError: {},
  loading: false,
};

export function PopularityIndexReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_CELEBRITY_STOCK_LIST_REQUEST + LOADING:
      oldState.loading = true;
      return oldState;
    case GET_CELEBRITY_STOCK_LIST_REQUEST + SUCCESS:
      oldState.stockListData = action.data;
      oldState.loading = false;
      return oldState;
    case GET_CELEBRITY_STOCK_LIST_REQUEST + FAILURE:
      oldState.userError = action.error;
      oldState.loading = false;
      return oldState;
    default:
      return state;
  }
}
