import LeaderBoardContests from './LeaderBoard';
import { createCustomScreenStack } from '../../Utils/utils';
import LeaderBoardRankScreen from './LeaderBoardRankScreen';

const LeaderBoardStackScreens = {
  LeaderBoardContests: LeaderBoardContests,
  LeaderBoardRankScreen: LeaderBoardRankScreen,
};

const LeaderBoardStack = () => {
  return createCustomScreenStack({ screens: LeaderBoardStackScreens });
};

export default LeaderBoardStack;
