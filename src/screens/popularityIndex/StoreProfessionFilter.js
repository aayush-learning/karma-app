import React, { useState, useRef } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const StoreProfessionFilter = ({ stockCategoryFilters, getCelebrityStockList }) => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const itemRef = useRef(null);
  const onItemClick = (item, index) => {
    setSelectedFilter(index);
    if (itemRef) {
      itemRef.current.scrollToIndex({ index: index, viewOffset: 0, viewPosition: 0.5 });
    }
    getCelebrityStockList(item.id);
  };
  const renderFilterItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onItemClick(item, index);
        }}
      >
        <View style={[styles.itemStyle, selectedFilter === index ? styles.selectedImage : null]}>
          <Text style={selectedFilter === index ? { fontWeight: 'bold' } : null}>{item.name}</Text>
          {/* {selectedFilter === index && <View style={styles.selectedItemStyle} /> */}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ padding: 10, justifyContent: 'space-between' }}>
      <FlatList
        horizontal
        scrollEventThrottle={2000}
        decelerationRate={0.5}
        keyExtractor={(item, index) => index.toString()}
        data={stockCategoryFilters}
        bounces={false}
        overScrollMode="never"
        renderItem={({ item, index }) => renderFilterItem(item, index)}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={() => {}}
        ref={itemRef}
      />
    </View>
  );
};

export default StoreProfessionFilter;

const styles = StyleSheet.create({
  itemStyle: {
    paddingHorizontal: 12.5,

    paddingVertical: 10,
  },
  selectedImage: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'blue',
    borderStyle: 'dotted',
  },
  selectedItemStyle: {
    alignSelf: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
  },
});
