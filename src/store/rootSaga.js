import { takeLatest, put, all } from 'redux-saga/effects';
import { popularityIndexSagas } from '../screens/popularityIndex/sagas/sagas';
// import sagaWatcher from '../screens/myProfile/sagas/saga';

export default function* rootSaga() {
  yield all([popularityIndexSagas()]);
}

/* function* sagaWorker() {
  yield put({ type: 'increment' });
}

export function incrementOriginal() {
  return { type: 'increment_saga' };
}

export function* sagaWatcher() {
  yield takeLatest('increment_saga', sagaWorker);
} */
