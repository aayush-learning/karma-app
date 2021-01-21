import { put, call, takeLatest } from 'redux-saga/effects';
import { PORTFOLIO } from '../../../Utils/apiUrl';
import { GET } from '../../../Utils/networkFetch';
import { SAGA, GET_MY_PORTFOLIO, LOADING, FAILURE, SUCCESS } from '../redux/profile.actions';

import Toaster from '../../../Utils/toaster';

function* getMyPortfolio({ type, payload = '2' }) {
  try {
    yield put({ type: GET_MY_PORTFOLIO + LOADING });
    const response = yield call(GET, PORTFOLIO.replace('{userId}', payload));
    if (!response.error) {
      const { data } = response;
      Toaster.show('Api Success', 5000);
      yield put({ type: GET_MY_PORTFOLIO + SUCCESS, data });
    } else {
      const { error } = response;
      yield put({ type: GET_MY_PORTFOLIO + FAILURE, error });
    }
  } catch (ex) {
    // catch block
  }
}

export function* profileIndexSagas() {
  yield takeLatest(GET_MY_PORTFOLIO + SAGA, getMyPortfolio);
}
