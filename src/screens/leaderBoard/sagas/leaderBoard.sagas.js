import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA, SUCCESS, FAILURE, LOADING, GET_LEADERBOARD_REQUEST } from '../redux/leaderBoard.actions';
import { GET, POST } from '../../../Utils/networkFetch';
import Toaster from '../../../Utils/toaster';
import { GET_LEADERBOARD } from '../../../Utils/apiUrl';

function* getLeaderboardWorkerSaga({ type, payload }) {
  try {
    yield put({ type: GET_LEADERBOARD_REQUEST + LOADING });
    const response = yield call(GET, `${GET_LEADERBOARD}`);
    if (!response.error) {
      Toaster.show('Api Success', 5000);
      const { data } = response;
      yield put({ type: GET_LEADERBOARD_REQUEST + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: GET_LEADERBOARD_REQUEST + FAILURE, error });
    }
  } catch (error) {
    yield put({ type: GET_LEADERBOARD_REQUEST + FAILURE, error });
  }
}

export function* getLeaderboardWatcherSagas() {
  yield takeLatest(GET_LEADERBOARD_REQUEST + SAGA, getLeaderboardWorkerSaga);
}
