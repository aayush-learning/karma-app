import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ThemeContext } from '../../modules/Theme/themeContext';
import { Theme } from '../../modules/Theme/themeColors';
import AutoSearch from '../../commonComponents/AutoSearch';

const WishList = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1 }}>
      <AutoSearch
        searchCb={() => {}}
        selectedCb={() => {}}
        listOfItems={[
          'ahjhj',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'g',
          'h',
          'j',
          'k',
          'l',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'g',
          'h',
          'j',
          'k',
          'l',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'g',
          'h',
          'j',
          'k',
          'l',
        ]}
      />
      {/* <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', flex: 1 }}
        onPress={() => props.navigation.navigate('Settings')}
      >
        <Text style={{ color: Theme[theme].text, fontSize: 20 }}>
          Click to Navigate to Theme Settings from wishlist
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

WishList.defaultProps = {};

WishList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
