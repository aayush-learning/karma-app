import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableHighlight, TouchableOpacity, StatusBar, Image } from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import CelebrityStockCards from './CelebrityStockCards';

const StockCardsScreen = ({ navigation, stockListData = [], showBuySellModal }) => {
  const rowMapRef = useRef(null);

  const onOwnEvent = (rowMap, rowKey) => {
    showBuySellModal({
      isShowBuySellModal: true,
      buySellPropsData: { screenShow: 'Buy' },
    });
  };

  const onDumpEvent = (rowMap, rowKey) => {
    showBuySellModal({
      isShowBuySellModal: true,
      buySellPropsData: { screenShow: 'Sell' },
    });
  };

  const setRef = (rowMap) => () => {
    if (!rowMapRef.current && Object.keys(rowMap).length > 0) {
      rowMapRef.current = rowMap[0];
      if (rowMapRef.current && rowMapRef.current.manuallySwipeRow) {
        setTimeout(() => {
          rowMapRef.current.manuallySwipeRow(-100);
          setTimeout(() => {
            rowMapRef.current.manuallySwipeRow(100);
            setTimeout(() => {
              rowMapRef.current.manuallySwipeRow(0);
            }, 1000);
          }, 1000);
        }, 1000);
      }
    }
  };

  const renderItem = (data, rowMap) => {
    return <CelebrityStockCards data={data} rowMap={rowMap} ref={setRef(rowMap)} />;
  };

  const HiddenButtons = (props) => {
    const { swipeAnimatedValue, onOwnEvent, onDumpEvent } = props;

    return (
      <Animated.View style={[styles.rowBack]}>
        <TouchableOpacity style={[styles.backBtn, styles.backLeftBtn]} onPress={onOwnEvent}>
          <Animated.View
            style={[
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [25, 100],
                      outputRange: [0, 1],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          >
            <Text>Own</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.backBtn, styles.backRightBtn]} onPress={onDumpEvent}>
          <Animated.View
            style={[
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [-100, -25],
                      outputRange: [1, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}
          >
            <Text>DUMP</Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenButtons
        data={data}
        rowMap={rowMap}
        onOwnEvent={() => onOwnEvent(rowMap, data.item.key)}
        onDumpEvent={() => onDumpEvent(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={stockListData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={100}
        rightOpenValue={-100}
      />
    </View>
  );
};

export default StockCardsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 5,
  },
  backBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 100,
  },
  backLeftBtn: {
    backgroundColor: 'green',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  backRightBtn: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
