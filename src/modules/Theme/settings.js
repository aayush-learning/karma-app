import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from './themeContext';

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}>
      <Text>Change Theme</Text>
    </TouchableOpacity>
  );
};

export default Settings;
