import React from 'react';
import { FlatList, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import UserRankCard from './components/UserRankCard';
import TournamentCards from './components/TournamentCards';
import { Color, Font } from '../../asset';

const ranks = [1, 2, 3, 4];
const LeaderBoardRankScreen = ({ navigation }) => {
  const onBackEvent = () => {
    navigation.pop();
  };
  return (
    <View style={{ backgroundColor: Color.bgWhite, flex: 1 }}>
      <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', paddingLeft: 15 }}>
        <TouchableOpacity onPress={onBackEvent} activeOpacity={0.7} style={{ paddingLeft: 2 }}>
          <MaterialIcons size={25} name="arrow-back" />
        </TouchableOpacity>

        <Text style={{ marginLeft: 40, fontFamily: Font.SEMI_BOLD, fontSize: Font.fontSize20 }}>Leaderboard</Text>
      </View>
      <View style={{ padding: 10 }}>
        <TournamentCards />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={ranks}
          bounces={false}
          renderItem={({ item, index }) => <UserRankCard item={item} index={index} />}
        />
      </View>
    </View>
  );
};

LeaderBoardRankScreen.defaultProps = {};
LeaderBoardRankScreen.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};

export default LeaderBoardRankScreen;
