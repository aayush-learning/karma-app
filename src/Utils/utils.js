import React, { useEffect } from 'react';
import { Dimensions, BackHandler, Platform, PermissionsAndroid, ToastAndroid, AppState } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../asset/Color/Color';

const { width } = Dimensions.get('window');

const Stack = createStackNavigator();

const TopTabs = createMaterialTopTabNavigator();

export const useAppStateEffect = (handleAppStateCB) => {
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateCB);
    return () => {
      AppState.removeEventListener('change', handleAppStateCB);
    };
  }, [handleAppStateCB]);
};

export const useEffectAtEveryChange = ({ cb = () => {}, cleanupCb = () => {}, args = [] }) => {
  useEffect(() => {
    cb();
    return () => {
      cleanupCb();
    };
  }, [...args, cb, cleanupCb]);
};

export const useBackButton = (handler) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
};

// function to be called whenever there is need of creating a stack navigator arguments to be passed are
/**
 *
 * @param {screenName: componentName} screens
 * @param customScreenOptions
 * @param customOptions
 */
export const createCustomScreenStack = ({
  screens,
  headerMode = 'none',
  customScreenOptions = {},
  customOptions = {},
}) => {
  return (
    <Stack.Navigator screenOptions={customScreenOptions} headerMode={headerMode}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen options={customOptions} key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export const createCustomTopTabs = ({
  tabs,
  tabBarOptions = {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    labelStyle: { fontSize: 12, fontWeight: 'bold' },
    tabStyle: { flex: 0.9, borderWidth: 1, borderColor: 'blue' },
    style: {},
  },
  customOptions = {},
}) => {
  return (
    <TopTabs.Navigator tabBarOptions={{ ...tabBarOptions }}>
      {Object.entries(tabs).map(([name, component]) => (
        <TopTabs.Screen
          options={{ ...customOptions, tabBarLabel: name }}
          key={name}
          name={name}
          component={component}
        />
      ))}
    </TopTabs.Navigator>
  );
};

const scale = (size) => (width / 340) * size;
export const normalize = (size, factor = 0.15) => size + (scale(size) - size) * factor;

export const formatNumber = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return `${+(n / 1e3).toFixed(1)}K`;
  if (n >= 1e6 && n < 1e9) return `${+(n / 1e6).toFixed(1)}M`;
  if (n >= 1e9 && n < 1e12) return `${+(n / 1e9).toFixed(1)}B`;
  if (n >= 1e12) return `${+(n / 1e12).toFixed(1)}T`;
};

export async function resize(uri) {
  // console.log(uri);
  const temp = await ImageResizer.createResizedImage(uri, 480, 480, 'JPEG', 80);
  return temp;
}

async function requestCameraPermission(cropHeader) {
  try {
    const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return await ImagePicker.openCamera({
        mediaType: 'photo',
        multiple: false,
        cropping: true,
        height: 720,
        width: 1440,
        cropperToolbarTitle: cropHeader || 'Crop Image',
        freeStyleCropEnabled: true,
        includeBase64: true,
        cropperActiveWidgetColor: colors.themeColor,
        cropperStatusBarColor: colors.themeColor,
        cropperToolbarColor: colors.themeColor,
        hideBottomControls: true,
      });
    }
    const granted1 = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      return await ImagePicker.openCamera({
        mediaType: 'photo',
        multiple: false,
        cropping: true,
        height: 720,
        width: 1440,
        cropperToolbarTitle: cropHeader || 'Crop Image',
        freeStyleCropEnabled: true,
        includeBase64: true,
        cropperActiveWidgetColor: colors.themeColor,
        cropperStatusBarColor: colors.themeColor,
        cropperToolbarColor: colors.themeColor,
        hideBottomControls: true,
      });
    }
    if (granted1 === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Please enable camera permission for this app from the app settings', ToastAndroid.SHORT);
    }
  } catch (err) {
    console.log(err);
  }
}

export const openCamera = async (cropHeader) => {
  const cameraPermission = await requestCameraPermission(cropHeader);
  if (Platform.OS === 'android') {
    return cameraPermission;
  }
  return null;
};
