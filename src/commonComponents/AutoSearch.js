import React, { useContext, useState, memo } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { ThemeContext } from '../modules/Theme/themeContext';
import { useEffectAtEveryChange } from '../Utils/utils';

const styles = StyleSheet.create({
  parentView: { borderRadius: 5, borderWidth: 1, borderColor: 'black' },
});

const AutoSearch = ({ width, height, searchCb, selectedCb, listOfItems, ...props }) => {
  const { theme } = useContext(ThemeContext);
  const [searchText, setSearchString] = useState('');
  const [matchingTextList, setMatchingTextList] = useState([]);

  useEffectAtEveryChange(() => {
    setMatchingTextList(listOfItems);
  }, [listOfItems]);

  const searchEnteredText = (value) => {
    searchCb(value);
    setSearchString(value);
  };

  const selectText = (value) => {
    selectedCb(value);
    setSearchString(value);
  };

  return (
    <View style={{ ...styles.parentView, width: width, height: height, flex: 1 }}>
      <TextInput
        defaultValue="search something"
        style={{ borderColor: 'black', borderWidth: 1, borderRadius: 2 }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        value={searchText}
        onChangeText={(value) => searchEnteredText(value)}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}}>
        {matchingTextList.map((item, index) => (
          <TouchableOpacity
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onPress={() => selectText(item)}
            style={{
              backgroundColor: 'grey',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginVertical: 1,
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

AutoSearch.defaultProps = { width: '100%', height: 50, selectedCb: () => {} };

AutoSearch.propTypes = {
  width: PropTypes.string,
  height: PropTypes.number,
  searchCb: PropTypes.func.isRequired,
  selectedCb: PropTypes.func,
  listOfItems: PropTypes.arrayOf(String).isRequired,
};

export default memo(AutoSearch);
