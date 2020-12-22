/*

import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import { ACTION_NAME,FAILURE, SUCCESS, PROGRESS,  SAGA } from '../redux/action';

function* sagaWorker({ type, payload }) {
  yield put({ type: ( ACTION_NAME + SUCCESS or ACTION_NAME ), data: payload });
}

function* sagaWatcher() {
  yield takeLatest(ACTION_NAME + SAGA, sagaWorker);
}

export default sagaWatcher;

 */
