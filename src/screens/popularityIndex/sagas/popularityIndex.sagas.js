import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FAILURE,
  SUCCESS,
  LOADING,
  SAGA,
  GET_CELEBRITY_STOCK_LIST_REQUEST,
  GET_CELEBRITY_STOCK_CATEGORY_REQUEST,
  getCelebrityStockList,
} from '../redux/popularityIndex.actions';
import { GET } from '../../../Utils/networkFetch';
import { LISTED_STOCKS, STOCK_CATEGORY } from '../../../Utils/apiUrl';
import Toaster from '../../../Utils/toaster';

function* getCelebrityStockList1({ type, payload }) {
  const { categoryId } = payload;
  try {
    yield put({ type: GET_CELEBRITY_STOCK_LIST_REQUEST + LOADING });
    const response = yield call(GET, LISTED_STOCKS.replace('{categoryId}', categoryId));
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: GET_CELEBRITY_STOCK_LIST_REQUEST + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: GET_CELEBRITY_STOCK_LIST_REQUEST + FAILURE, error });
    }
  } catch (ex) {
    // catch block
  }
}

function* getCelebrityStockCategory({ type, payload }) {
  try {
    const response = yield call(GET, STOCK_CATEGORY);
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: GET_CELEBRITY_STOCK_CATEGORY_REQUEST + SUCCESS, data });
      if (payload.isGetStockList) {
        yield put(getCelebrityStockList(data[0].id));
      }
    } else {
      const { error } = response;
      yield put({ type: GET_CELEBRITY_STOCK_CATEGORY_REQUEST + FAILURE, error });
    }
  } catch (ex) {
    // catch block
  }
}

export function* popularityIndexSagas() {
  yield takeLatest(GET_CELEBRITY_STOCK_LIST_REQUEST + SAGA, getCelebrityStockList1);
  yield takeLatest(GET_CELEBRITY_STOCK_CATEGORY_REQUEST + SAGA, getCelebrityStockCategory);
}
