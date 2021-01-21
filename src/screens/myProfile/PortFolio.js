import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeContext } from '../../modules/Theme/themeContext';
import { Theme } from '../../modules/Theme/themeColors';
import PortfolioTable from './components/PortfolioTable';

const PortFolio = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
          flex: 1,
          alignSelf: 'center',
        }}
        onPress={() => props.navigation.navigate('Settings')}
      >
        <Text style={{ color: Theme[theme].text, fontSize: 20 }}>
          Click to Navigate to Theme Settings from portFolio
        </Text>
      </TouchableOpacity>
      <PortfolioTable />
    </View>
  );
};

PortFolio.defaultProps = {};

PortFolio.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PortFolio);
