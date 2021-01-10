/* eslint-disable import/no-extraneous-dependencies */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import createCustomStore from './src/store/store';
import ErrorBoundary from './src/commonComponents/errorBoundary';
import { ThemeContextProvider } from './src/modules/Theme/themeContext';
import { Route } from './src/store/route';
import Wrapper from './src/store/wrapper';

const App = () => {
  return <Route />;
};

const AppWrappedWithStore = () => {
  const { store, persistor } = createCustomStore();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <StatusBar animated barStyle="default" />
        <PersistGate persistor={persistor} loading={null}>
          <RootSiblingParent>
            <ThemeContextProvider>
              <Wrapper>
                <App />
              </Wrapper>
            </ThemeContextProvider>
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default AppWrappedWithStore;
