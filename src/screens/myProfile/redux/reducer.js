/*
import { FAILURE, SUCCESS, PROGRESS, ACTION_NAME } from './action';

const intialStateDefinition = {
 //states to be used in this reducer
  user: {},
  isUserLoading: true,
  userError: {}
}; 

export function user(state = intialStateDefinition, action) {
  let oldState = {...state};
  switch (action.type) {
    case ACTION_NAME + SUCCESS || ACTION_NAME :
      oldState.user = action.data;
      oldState.isUserLoading = false;
      return oldState;
    case ACTION_NAME + PROGRESS:
      oldState.isUserLoading = true;
      return oldState;
    case ACTION_NAME + FAILURE:
      oldState.userError = action.error;
      oldState.isUserLoading = false;
      return oldState;
    default:
      return state;
  }
}

//always remember to return new state from here!!

*/
