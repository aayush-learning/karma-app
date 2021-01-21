import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA, SUCCESS, FAILURE, LOADING, GET_TRENDING_REQUEST } from '../redux/trending.action';
import { GET, POST } from '../../../Utils/networkFetch';
import Toaster from '../../../Utils/toaster';
import { TRENDING } from '../../../Utils/apiUrl';

function* getTrendingResultWorkerSaga({ type, payload }) {
  try {
    yield put({ type: GET_TRENDING_REQUEST + LOADING });
    const response = yield call(GET, `${TRENDING}`);
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: GET_TRENDING_REQUEST + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: GET_TRENDING_REQUEST + FAILURE, error });
    }
  } catch (error) {
    yield put({ type: GET_TRENDING_REQUEST + FAILURE, error });
  }
}

export function* getTrendingResultWatcherSagas() {
  yield takeLatest(GET_TRENDING_REQUEST + SAGA, getTrendingResultWorkerSaga);
}
