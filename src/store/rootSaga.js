import { all } from 'redux-saga/effects';
import { profileIndexSagas } from '../screens/myProfile/sagas/profile.sagas';
import { getLeaderboardWatcherSagas } from '../screens/leaderBoard/sagas/leaderBoard.sagas';
import { getFeedWatcherSagas } from '../screens/home/sagas/home.sagas';
import { getProfileWatcherSagas } from '../screens/myProfile/sagas/myprofile.saga';
import { getSearchResultWatcherSagas } from '../screens/search/sagas/search.saga';
import { getTrendingResultWatcherSagas } from '../screens/trending/sagas/trending.saga';
import { popularityIndexSagas } from '../screens/popularityIndex/sagas/popularityIndex.sagas';

export default function* rootSaga() {
  yield all([
    popularityIndexSagas(),
    getLeaderboardWatcherSagas(),
    getFeedWatcherSagas(),
    profileIndexSagas(),
    getProfileWatcherSagas(),
    getSearchResultWatcherSagas(),
    getTrendingResultWatcherSagas(),
  ]);
}
