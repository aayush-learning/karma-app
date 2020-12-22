import PortFolio from './PortFolio';
import Movements from './Movements';
import WishList from './WishList';
import { createCustomTopTabs } from '../../Utils/utils';

const tabs = { Movements: Movements, PortFolio: PortFolio, WishList: WishList };

const ProfileTabs = () => {
  return createCustomTopTabs({ tabs: tabs });
};

export default ProfileTabs;
