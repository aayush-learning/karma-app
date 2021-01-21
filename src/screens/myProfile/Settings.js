import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeContext } from '../../modules/Theme/themeContext';
import { Theme } from '../../modules/Theme/themeColors';
import Settings from '../../modules/Theme/settings';

const AppSettings = () => {
  return <Settings />;
};

AppSettings.defaultProps = {};

AppSettings.propTypes = {};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppSettings);
