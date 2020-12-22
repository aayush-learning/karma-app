import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  '5w': width * 0.05,
  '10w': width * 0.1,
  '20w': width * 0.2,
  '25w': width * 0.25,
  '30w': width * 0.3,
  '35w': width * 0.35,
  '40w': width * 0.4,
  '50w': width * 0.5,
  '70w': width * 0.7,
  '80w': width * 0.8,
  '90w': width * 0.9,
  width,
};
