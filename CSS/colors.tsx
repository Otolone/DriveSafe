// theme.js
import {DefaultTheme} from 'react-native-paper';

const customTheme = {
  ...DefaultTheme,
  roundness: 10,
  width: 60,
  height: 50,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db', // Set your desired button color here
    secondary: '#808080',
    // Customize other colors if needed
  },
};

const white = '#0000';
const black = '#FFFF';

const grey = '#808080';

const red = '#900';

export {white, black, grey, red, customTheme};
