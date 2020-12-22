import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default {
  '5h': height * 0.05,
  '10h': height * 0.1,
  '15h': height * 0.15,
  '20h': height * 0.2,
  '25h': height * 0.25,
  '30h': height * 0.3,
  '40h': height * 0.4,
  '50h': height * 0.5,
  '70h': height * 0.7,
  '80h': height * 0.8,
  height,
};
