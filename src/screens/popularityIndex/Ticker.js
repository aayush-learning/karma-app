import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image';
import { cardConfig } from './CelebrityConfig';
import { Color, Font } from '../../asset';

const styles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: '#3393FF',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'grey',
  },
  listItem: {
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
  },
  imageItem: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 5,
  },
});

const Ticker = () => {
  const [config, setConfig] = useState([]);
  const callfunc = (index) => {
    // setMyConfig(cardConfig);
    alert(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setConfig(cardConfig);
    }, 1000);
  }, []);

  const renderItems = (item, index) => {
    return (
      <TouchableOpacity onPress={() => callfunc(index)} style={styles.listItem}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          style={styles.imageItem}
          source={{
            uri: item.profileUrl,
            cache: FastImage.cacheControl.immutable,
          }}
        />
        <Text style={{ color: Color.bgWhite, fontFamily: Font.regular }}>{item.currentStockValue}</Text>
        <View style={{ marginBottom: 6 }}>
          <Entypo
            size={30}
            style={{ color: item.percentChange > 0 ? '#DC143C' : '#33FF42' }}
            name={item.percentChange > 0 ? 'triangle-down' : 'triangle-up'}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
        keyExtractor={(item, index) => index.toString()}
        data={config}
        bounces={false}
        overScrollMode="never"
        renderItem={({ item, index }) => renderItems(item, index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Ticker;
