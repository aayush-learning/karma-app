import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { ThemeContext } from '../modules/Theme/themeContext';
import { Theme } from '../modules/Theme/themeColors';

const styles = StyleSheet.create({
  parentView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', color: 'black' },
});

const LoadingState = (props) => {
  const { message } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.parentView}>
      {/* <MaterialIcons /> */}
      <Text style={styles.text}>{message}</Text>
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
