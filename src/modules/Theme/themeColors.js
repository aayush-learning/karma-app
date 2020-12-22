const themeColor = {
  white: '#FFFFFF',
  grey: '#E8E7EA',
  yellow: '#FFF9E1',
  red: '#FDE7EE',
  pink: '#F9E2F0',
  purple: '#F5E6F9',
  blue: '#E6F6FE',
  green: '#E8FAEB',
  black: 'rgba(0,0,0,1)',
};

const Theme = {
  Light: {
    primary: themeColor.blue,
    background: themeColor.white,
    card: themeColor.purple,
    text: themeColor.black,
    border: themeColor.red,
    notification: themeColor.purple,
  },
  Dark: {
    primary: themeColor.green,
    background: themeColor.black,
    card: themeColor.black,
    text: themeColor.white,
    border: themeColor.red,
    notification: themeColor.purple,
  },
};

export { Theme };
