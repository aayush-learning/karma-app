import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileStack from '../screens/myProfile/profileNavigator';
import LoginStack from '../screens/login/login.navigator';
import PopularityStack from '../screens/popularityIndex/popularityIndex.navigator';
import LeaderBoardStack from '../screens/leaderBoard/LeaderBoard.navigator';
import MovementForm from '../screens/movement/MovementForm'; // TODO remove the import too.

const Tab = createBottomTabNavigator();

const sampleComponent = () => (
  <View>
    <Text>Sample component will be replaced when the actjual screens will be built</Text>
  </View>
);

const getTabScreen = (tabName) => {
  switch (tabName) {
    case 'LeaderBoard':
      return (
        <Tab.Screen
          key={tabName}
          name="LeaderBoard"
          component={LeaderBoardStack}
          options={{
            tabBarLabel: 'LeaderBoard',
            tabBarIcon: () => <MaterialCommunityIcons name="chevron-triple-up" size={24} color="#000" />,
          }}
        />
      );
    case 'Home':
      return (
        <Tab.Screen
          key={tabName}
          name="Home"
          component={sampleComponent}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <MaterialCommunityIcons name="home-outline" size={24} color="#000" />,
          }}
        />
      );

    case 'Search':
      return (
        <Tab.Screen
          key={tabName}
          name="Search"
          component={sampleComponent}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                // name="email-box"
                name="magnify"
                size={24}
                color="#000"
              />
            ),
          }}
        />
      );

    case 'Trending':
      return (
        <Tab.Screen
          key={tabName}
          name="Trending"
          component={PopularityStack}
          options={{
            tabBarLabel: 'Trending',
            tabBarIcon: () => <MaterialCommunityIcons name="align-vertical-bottom" size={24} color="#000" />,
          }}
        />
      );

    case 'Profile':
      return (
        <Tab.Screen
          key={tabName}
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => <MaterialCommunityIcons name="face-profile" size={24} color="#000" />,
          }}
        />
      );

    default:
      return (
        <Tab.Screen
          key="default"
          name="Default"
          component={sampleComponent}
          options={{
            tabBarLabel: 'Default',
            tabBarIcon: () => <MaterialCommunityIcons name="face-profile" size={24} color="#000" />,
          }}
        />
      );
  }
};

const activeTab = ['LeaderBoard', 'Trending', 'Home', 'Search', 'Profile'];

const HomeRouteTabs = () => <Tab.Navigator>{activeTab.map((keys) => getTabScreen(keys))}</Tab.Navigator>;

export const Route = () => {
  return <NavigationContainer>{LoginStack(HomeRouteTabs)}</NavigationContainer>;
};
