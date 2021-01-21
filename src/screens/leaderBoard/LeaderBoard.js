import React from 'react';
import { Text, View } from 'react-native';
import { Color, Font } from '../../asset';
import { createCustomTopTabs } from '../../Utils/utils';
import LeaderBoardContests from './LeaderBoardContests';

const tabs = { Live: LeaderBoardContests, 'Last Week': LeaderBoardContests };
const tabBarOptions = {
  activeTintColor: 'white',
  activeBackgroundColor: 'blue',
  inactiveTintColor: 'blue',
  labelStyle: { fontSize: 12, fontWeight: 'bold' },
  indicatorStyle: {
    height: '100%',
    backgroundColor: 'blue',
    overflow: 'hidden',
    borderRadius: 5,
  },
  style: { borderRadius: 5, margin: 5, borderColor: 'blue', borderWidth: 0.5 },
};

const ProfileTabs = () => {
  return createCustomTopTabs({ tabs: tabs, tabBarOptions });
};

const LeaderBoard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Color.bgWhite }}>
      <View style={{ height: 50, borderWidth: 1, borderColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: Font.SEMI_BOLD, fontSize: Font.fontSize18 }}>LeaderBoard</Text>
      </View>
      <ProfileTabs />
    </View>
  );
};

LeaderBoard.propTypes = {};

LeaderBoard.defaultProps = {};

export default LeaderBoard;
