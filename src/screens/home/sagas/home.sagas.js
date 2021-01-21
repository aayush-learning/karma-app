import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA, SUCCESS, FAILURE, LOADING, GET_FEED_REQUEST } from '../redux/home.actions';
import { GET, POST } from '../../../Utils/networkFetch';
import Toaster from '../../../Utils/toaster';
import { GET_FEED } from '../../../Utils/apiUrl';

function* getFeedWorkerSaga({ type, payload }) {
  try {
    yield put({ type: GET_FEED_REQUEST + LOADING });
    const response = yield call(GET, `${GET_FEED}`);
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: GET_FEED_REQUEST + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: GET_FEED_REQUEST + FAILURE, error });
    }
  } catch (error) {
    yield put({ type: GET_FEED_REQUEST + FAILURE, error });
  }
}

export function* getFeedWatcherSagas() {
  yield takeLatest(GET_FEED_REQUEST + SAGA, getFeedWorkerSaga);
}
