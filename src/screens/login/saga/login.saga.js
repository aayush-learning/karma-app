import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA, SUCCESS, FAILURE, LOADING, USER_LOGIN_REQUEST } from '../redux/login.actions';
import { GET, POST } from '../../../Utils/networkFetch';
import Toaster from '../../../Utils/toaster';
import { USER_LOGIN } from '../../../Utils/apiUrl';

function* userLoginWorkerSaga({ type, payload }) {
  try {
    yield put({ type: USER_LOGIN_REQUEST + LOADING });
    const response = yield call(GET, `${USER_LOGIN}`);
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: USER_LOGIN_REQUEST + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: USER_LOGIN_REQUEST + FAILURE, error });
    }
  } catch (error) {
    yield put({ type: USER_LOGIN_REQUEST + FAILURE, error });
  }
}

export function* userLoginWatcherSagas() {
  yield takeLatest(USER_LOGIN_REQUEST + SAGA, userLoginWorkerSaga);
}
