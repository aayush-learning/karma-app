import { FAILURE, SUCCESS, LOADING, GET_SEARCH_RESULT_REQUEST } from './search.action';

const intialState = {
  loading: false,
  error: null,
  searchResult: undefined,
};

export function GetSearchResultReducer(state = intialState, action) {
  const oldState = { ...state };
  switch (action.type) {
    case GET_SEARCH_RESULT_REQUEST + LOADING:
      oldState.loading = true;
      return oldState;
    case GET_SEARCH_RESULT_REQUEST + SUCCESS:
      oldState.searchResult = action.data;
      oldState.loading = false;
      return oldState;
    case GET_SEARCH_RESULT_REQUEST + FAILURE:
      oldState.loading = false;
      oldState.error = action.error;
      return oldState;
    default:
      return state;
  }
}
