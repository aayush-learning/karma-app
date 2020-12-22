import { useState } from 'react';
import Login from './Login';
import { createCustomScreenStack } from '../../Utils/utils';

const LoginStack = (HomeRouteTabs) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const loginStackScreens = isLoggedIn ? { Home: HomeRouteTabs } : { Login: Login };
  return createCustomScreenStack({ screens: loginStackScreens });
};

export default LoginStack;
