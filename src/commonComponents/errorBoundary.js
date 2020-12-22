import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  mainView: { justifyContent: 'center', alignItems: 'center', flex: 1 },
});
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(
      {
        hasError: true,
      },
      () => {
        console.log(errorInfo, error); // Any Crashlytics error log
      }
    );
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    return hasError ? (
      <View style={styles.mainView}>
        <Text>Something Went Wrong! Please Restart the App.</Text>
      </View>
    ) : (
      children
    );
  }
}

ErrorBoundary.defaultProps = {
  children: {},
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
