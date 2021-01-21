import LeaderBoard from './LeaderBoard';
import { createCustomScreenStack } from '../../Utils/utils';
import LeaderBoardRankScreen from './LeaderBoardRankScreen';

const LeaderBoardStackScreens = {
  LeaderBoardContests: LeaderBoard,
  LeaderBoardRankScreen: LeaderBoardRankScreen,
};

const LeaderBoardStack = () => {
  return createCustomScreenStack({ screens: LeaderBoardStackScreens });
};

export default LeaderBoardStack;
