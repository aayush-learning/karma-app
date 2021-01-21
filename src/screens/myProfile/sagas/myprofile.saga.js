import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA, SUCCESS, FAILURE, LOADING, GET_PROFILE_REQUEST } from '../redux/myprofile.action';
import { GET, POST } from '../../../Utils/networkFetch';
import Toaster from '../../../Utils/toaster';
import { GET_PROFILE } from '../../../Utils/apiUrl';

function* getProfileWorkerSaga({ type, payload }) {
  try {
    yield put({ type: GET_PROFILE_REQUEST + LOADING });
    const response = yield call(GET, `${GET_PROFILE}`);
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: GET_PROFILE_REQUEST + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: GET_PROFILE_REQUEST + FAILURE, error });
    }
  } catch (error) {
    yield put({ type: GET_PROFILE_REQUEST + FAILURE, error });
  }
}

export function* getProfileWatcherSagas() {
  yield takeLatest(GET_PROFILE_REQUEST + SAGA, getProfileWorkerSaga);
}
