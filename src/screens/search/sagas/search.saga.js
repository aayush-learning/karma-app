import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA, SUCCESS, FAILURE, LOADING, GET_SEARCH_RESULT_REQUEST } from '../redux/search.action';
import { GET, POST } from '../../../Utils/networkFetch';
import Toaster from '../../../Utils/toaster';
import { SEARCH } from '../../../Utils/apiUrl';

function* getSearchResultWorkerSaga({ type, payload }) {
  try {
    yield put({ type: GET_SEARCH_RESULT_REQUEST + LOADING });
    const response = yield call(GET, `${SEARCH}`);
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: GET_SEARCH_RESULT_REQUEST + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: GET_SEARCH_RESULT_REQUEST + FAILURE, error });
    }
  } catch (error) {
    yield put({ type: GET_SEARCH_RESULT_REQUEST + FAILURE, error });
  }
}

export function* getSearchResultWatcherSagas() {
  yield takeLatest(GET_SEARCH_RESULT_REQUEST + SAGA, getSearchResultWorkerSaga);
}
