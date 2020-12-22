import UserProfile from './UserProfile';
import Settings from './Settings';
import { createCustomScreenStack } from '../../Utils/utils';

const profileStackScreens = { Profile: UserProfile, Settings: Settings };

const ProfileStack = () => {
  return createCustomScreenStack({ screens: profileStackScreens });
};

export default ProfileStack;
