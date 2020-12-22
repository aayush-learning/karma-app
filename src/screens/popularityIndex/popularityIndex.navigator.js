import PopularityIndex from './PopularityIndex';
import { createCustomScreenStack } from '../../Utils/utils';

const popularityIndexStackScreens = { PopularityIndex: PopularityIndex };

const PopularityStack = () => {
  return createCustomScreenStack({ screens: popularityIndexStackScreens });
};

export default PopularityStack;
