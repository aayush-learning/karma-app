import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { coin } from '../../../Utils/images';
import { Color, Font } from '../../../asset';

const userColor = { 0: '#FBD84A', 1: '#C0C0C0', 2: '#CD7F32' };
const rank = 300;

const UserRankCard = ({ item, index }) => {
  return (
    <View style={[styles.cardsContainer, { backgroundColor: userColor[index] ? userColor[index] : '#F5F5F5' }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.8 }}>
        <View style={{ width: 45, height: 50, borderRadius: 8, overflow: 'hidden' }}>
          <FastImage
            source={{
              uri: 'https://picsum.photos/600/700',
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.imageItemProfile}
          />
        </View>

        <View style={{ position: 'absolute', top: -12, left: -8 }}>
          {[0, 1, 2].includes(index) ? (
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: Color.bgWhite,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons size={15} name="trophy" color={userColor[index]} />
            </View>
          ) : rank.toString().length < 3 ? (
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 25 / 2,
                backgroundColor: Color.bgWhite,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: -5,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: '#FF8C00',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontFamily: Font.BOLD, fontSize: Font.fontSize12, color: '#e5e5e5' }}>30</Text>
              </View>
            </View>
          ) : (
            <View
              style={{
                padding: 4,
                borderRadius: 10,
                backgroundColor: Color.bgWhite,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: -8,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 4,
                  borderRadius: 8,
                  backgroundColor: '#FF8C00',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontFamily: Font.BOLD, fontSize: Font.fontSize12, color: '#e5e5e5' }}>300</Text>
              </View>
            </View>
          )}
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.userNameStyle}>Hulk</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <FastImage resizeMode={FastImage.resizeMode.contain} style={styles.imageItemCoin} source={coin()} />
        <Text style={styles.coinTextStyle}>1234K</Text>
      </View>
      <View />
    </View>
  );
};

UserRankCard.defaultProps = {};
UserRankCard.propTypes = {
  index: PropTypes.number.isRequired,
};

export default UserRankCard;

const styles = StyleSheet.create({
  cardsContainer: {
    height: 70,
    borderRadius: 8,
    paddingLeft: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  userNameStyle: {
    fontFamily: Font.BOLD,
    fontSize: Font.fontSize16,
  },
  coinTextStyle: {
    fontFamily: Font.BOLD,
    fontSize: Font.fontSize16,
  },
  imageItemProfile: {
    width: 60,
    height: 50,
    marginRight: 8,
  },
  imageItemCoin: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});
