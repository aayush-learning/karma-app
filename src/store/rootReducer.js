import { combineReducers } from 'redux';
import { PopularityIndexReducer } from '../screens/popularityIndex/redux/reducer';
// import {user} from '../screens/myProfile/redux/reducer';
// const rootReducer = combineReducers({
//   user,
// });

function counter(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter,
  PopularityIndexReducer,
});

export default rootReducer;
