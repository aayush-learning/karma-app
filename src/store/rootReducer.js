import { combineReducers } from 'redux';
import { PopularityIndexReducer } from '../screens/popularityIndex/redux/popularityIndex.reducers';
import { AppReducer } from '../Utils/commmon/app.reducer';
import { LeaderboardReducer } from '../screens/leaderBoard/redux/leaderBoard.reducers';
import { UserLoginReducer } from '../screens/login/redux/login.reducer';
import { GetFeedReducer } from '../screens/home/redux/home.reducers';
import { GetProfileReducer } from '../screens/myProfile/redux/myprofile.reducer';
import { GetSearchResultReducer } from '../screens/search/redux/search.reducer';
import { GetTrendingReducer } from '../screens/trending/redux/trending.reducer';
import { profileReducer } from '../screens/myProfile/redux/profile.reducers';

const appReducer = combineReducers({
  PopularityIndexReducer,
  AppReducer,
  LeaderboardReducer,
  UserLoginReducer,
  GetFeedReducer,
  GetProfileReducer,
  GetSearchResultReducer,
  GetTrendingReducer,
  profileReducer,
});

const rootReducer = (state, action) => {
  // we can do clean up here for the cases when closing the app or changing the user so as to
  // avoid the problem of cached data being leaked to the other users or
  // previous session pop ups being visible in current sessions
  return appReducer(state, action);
};

export default rootReducer;
