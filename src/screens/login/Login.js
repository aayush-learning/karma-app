import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { incrementOriginal } from '../../store/rootSaga';
import { ThemeContext } from '../../modules/Theme/themeContext';
import { Theme } from '../../modules/Theme/themeColors';

const Login = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: Theme[theme].background, flex: 1 }}
      onPress={() => props.navigation.navigate('Home')}
    >
      <Text style={{ color: Theme[theme].text, fontSize: 20 }}>Click to Navigate to Home from Login</Text>
    </TouchableOpacity>
  );
};

Login.defaultProps = {};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

// const mapStateToProps = (state) => {
//   const { counter } = state;
//   return { counter };
// };
// const mapDispatchToProps = { incrementOriginal };

export default connect(null, null)(Login);
