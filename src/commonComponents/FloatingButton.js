import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { ThemeContext } from '../modules/Theme/themeContext';
import { Theme } from '../modules/Theme/themeColors';

const styles = StyleSheet.create({
  parentView: {
    position: 'absolute',
    bottom: 70,
    right: 15,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const FloatingButton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity style={[styles.parentView, { backgroundColor: Theme[theme].background }]}>
      <MaterialIcons name="share" color={Theme[theme].text} size={20} />
    </TouchableOpacity>
  );
};

FloatingButton.defaultProps = {};

FloatingButton.propTypes = {};

export default FloatingButton;
