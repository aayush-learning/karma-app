import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState('Light');
  return <Context.Provider value={{ theme, setTheme }}>{props.children}</Context.Provider>;
};
ThemeContextProvider.defaultProps = {};
ThemeContextProvider.propTypes = { children: PropTypes.node.isRequired };

export const ThemeContext = Context;
