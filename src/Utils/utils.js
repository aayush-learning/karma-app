import React, { useEffect } from 'react';
import { Dimensions, BackHandler } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { width } = Dimensions.get('window');

const Stack = createStackNavigator();

const TopTabs = createMaterialTopTabNavigator();

export const useEffectOnce = (cb) => {
  useEffect(() => {
    cb();
    return () => {
      console.log('useEffectOnce cleanup');
    };
  }, []);
};

export const useEffectAtEveryChange = (cb, arg) => {
  useEffect(() => {
    cb();
    return () => {
      console.log('useEffectAtEveryChange cleanup');
    };
  }, [...arg]);
};

export const useBackButton = (handler) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
};

// function to be called whenever there is need of creating a stack navigator arguments to be passed are
/**
 *
 * @param {screenName: componentName} screens
 * @param customScreenOptions
 * @param customOptions
 */
export const createCustomScreenStack = ({
  screens,
  headerMode = 'none',
  customScreenOptions = {},
  customOptions = {},
}) => {
  return (
    <Stack.Navigator screenOptions={customScreenOptions} headerMode={headerMode}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen options={customOptions} key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export const createCustomTopTabs = ({
  tabs,
  tabBarOptions = {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    labelStyle: { fontSize: 12, fontWeight: 'bold' },
    tabStyle: { flex: 0.9, borderWidth: 1, borderColor: 'blue' },
    style: {},
  },
  customOptions = {},
}) => {
  return (
    <TopTabs.Navigator tabBarOptions={{ ...tabBarOptions }}>
      {Object.entries(tabs).map(([name, component]) => (
        <TopTabs.Screen
          options={{ ...customOptions, tabBarLabel: name }}
          key={name}
          name={name}
          component={component}
        />
      ))}
    </TopTabs.Navigator>
  );
};

const scale = (size) => (width / 340) * size;
export const normalize = (size, factor = 0.15) => size + (scale(size) - size) * factor;
