import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import FloatingButton from '../commonComponents/FloatingButton';

const Wrapper = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {props.children}
      <FloatingButton />
    </View>
  );
};

Wrapper.defaultProps = {};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
