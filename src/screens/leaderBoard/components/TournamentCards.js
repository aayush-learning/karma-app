import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { Color, Font } from '../../../asset';
import { trophy } from '../../../Utils/images';

const TournamentCards = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#FBD84A', '#FEE972']}
        style={styles.cardsContainer}
      >
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.textStyle1}>WIN 10$</Text>
          <Text style={styles.textStyle2}>Todays high token balance wins</Text>
          <Text style={styles.textStyle3}>Contest ends on 12h 18min</Text>
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.imageItem} source={trophy()} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default TournamentCards;

const styles = StyleSheet.create({
  cardsContainer: {
    height: 150,
    borderRadius: 8,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageItem: {
    width: 100,
    height: 100,
  },
  textStyle1: {
    fontFamily: Font.BOLD,
    fontSize: Font.fontSize16,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  textStyle2: {
    fontFamily: Font.REGULAR,
    fontSize: Font.fontSize14,
    paddingBottom: 2,
  },
  textStyle3: {
    fontFamily: Font.REGULAR,
    fontSize: Font.fontSize14,
    color: Color.redBg,
  },
});
