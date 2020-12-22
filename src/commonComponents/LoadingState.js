import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { ThemeContext } from '../modules/Theme/themeContext';

const styles = StyleSheet.create({
  parentView: { flex: 1 },
});

const LoadingState = (props) => {
  const { message } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.parentView}>
      <MaterialIcons />
      <Text>{message}</Text>
    </View>
  );
};

LoadingState.defaultProps = {
  message: '',
};

LoadingState.propTypes = {
  message: PropTypes.string,
};

export default LoadingState;
