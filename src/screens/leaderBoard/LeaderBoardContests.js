import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import TournamentCards from './components/TournamentCards';
import { Color } from '../../asset';

const ranks = [1, 2, 3, 4, 5, 6, 7];

const LeaderBoardContests = (props) => {
  const { navigation, route } = props;
  const onContestClick = () => {
    navigation.navigate('LeaderBoardRankScreen');
  };
  return (
    <View style={{ flex: 1, backgroundColor: Color.bgWhite }}>
      {route?.name === 'Live' ? <Text>Live</Text> : <Text>Last week</Text>}
      <View style={{ paddingHorizontal: 8 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={ranks}
          ItemSeparatorComponent={() => <View style={{ marginTop: 15 }} />}
          bounces={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity activeOpacity={0.7} onPress={onContestClick}>
                <TournamentCards />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

LeaderBoardContests.defaultProps = {
  route: null,
};
LeaderBoardContests.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default LeaderBoardContests;
