import { takeLatest, put, call } from 'redux-saga/effects';
import { FAILURE, SUCCESS, LOADING, SAGA, GET_CELEBRITY_STOCK_LIST_REQUEST } from '../redux/actions';
import { GET } from '../../../Utils/networkFetch';
import { TEST_API } from '../../../Utils/apiUrl';
import Toaster from '../../../Utils/toaster';

function* getCelebrityStockList({ type, payload }) {
  try {
    yield put({ type: GET_CELEBRITY_STOCK_LIST_REQUEST + LOADING });
    const response = yield call(GET, TEST_API);
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

export function* popularityIndexSagas() {
  yield takeLatest(GET_CELEBRITY_STOCK_LIST_REQUEST + SAGA, getCelebrityStockList);
}
