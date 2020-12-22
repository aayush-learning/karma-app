import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { ThemeContext } from '../modules/Theme/themeContext';

const styles = StyleSheet.create({
  parentView: { flex: 1 },
});

const ErrorState = (props) => {
  const { message } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.parentView}>
      <MaterialIcons />
      <Text>{message}</Text>
    </View>
  );
};

ErrorState.defaultProps = {
  message: '',
};

ErrorState.propTypes = {
  message: PropTypes.string,
};

export default ErrorState;
