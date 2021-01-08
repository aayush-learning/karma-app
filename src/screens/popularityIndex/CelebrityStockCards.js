import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { get } from 'lodash';

const CelebrityStockCards = React.forwardRef((props, ref) => {
  const { data } = props;
  const celebDetails = JSON.parse(get(data, 'item.celebDetails', null));
  const { stockPrice = 0, basePrice = 0 } = data?.item;
  const percentChange = (((stockPrice - basePrice) / 100) * basePrice).toFixed(2);

  return (
    <View style={[styles.rowFront]} ref={ref}>
      <View style={styles.cardContainer}>
        <View
          style={{
            justifyContent: 'center',
            width: 60,
            backgroundColor: '#F0F0F0',
            borderRadius: 10,
            height: 50,
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
            source={{
              uri: celebDetails?.avatar,
              cache: FastImage.cacheControl.immutable,
            }}
          />
        </View>

        <View style={{ flex: 0.4, marginRight: 5 }}>
          <Text numberOfLines={1} style={{ paddingBottom: 2, fontWeight: 'bold' }}>
            {celebDetails?.name}
          </Text>
          <Text numberOfLines={1}>@{celebDetails?.handle}</Text>
        </View>
        <View style={{ flex: 0.2 }}>
          <Text style={{ fontWeight: 'bold' }}>{data.item.totalShares}</Text>
        </View>
        <View style={{ flex: 0.2 }}>
          <Text
            style={[percentChange > 0 ? styles.textColorPositive : styles.textColorNegative, { fontWeight: 'bold' }]}
          >
            {percentChange > 0 ? '+' : ''}
            {percentChange}%
          </Text>
        </View>
      </View>
    </View>
  );
});

export default CelebrityStockCards;

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 50,
    overflow: 'hidden',
    marginBottom: 15,

    elevation: 5,
  },
  cardContainer: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: 5,
    paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  textColorPositive: {
    color: 'green',
  },
  textColorNegative: {
    color: 'red',
  },
});
