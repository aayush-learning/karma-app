import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, PermissionsAndroid } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import Geolocation from '@react-native-community/geolocation';
import Textarea from './TextArea';
import { openCamera, resize } from '../../Utils/utils';
import Width from '../../asset/Contants/Width';
import Height from '../../asset/Contants/Height';

const MovementForm = () => {
  const [hashTagValue, setHashTagValue] = useState();
  const [reTwitValue, setReTwitValue] = useState();
  const [imageUrl, setImageUrl] = useState('');
  const [initialPosition, setInitialPosition] = useState('');
  const [lastPosition, setLastPosition] = useState('');

  const hashTagChange = (value) => setHashTagValue(value);
  const retwitChange = (value) => setReTwitValue(value);
  const attachImage = () => {
    openCamera().then((image) => {
      resize(image.path).then((img) => {
        setImageUrl(image.path);
      });
    });
  };

  const locationPremission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      console.log('===========>', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert('You can use the location');
        console.log('location', Geolocation);
      } else {
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#fff', marginTop: 4 }}
        onChangeText={(text) => hashTagChange(text)}
        placeholder="#"
        value={hashTagValue}
      />
      <View style={{ backgroundColor: 'gray', borderWidth: 1, marginTop: 4 }}>
        <Textarea
          containerStyle={{
            height: 180,
            padding: 5,
            backgroundColor: '#fff',
          }}
          style={{
            textAlignVertical: 'top',
            height: 170,
            fontSize: 14,
            color: '#333',
          }}
          onChangeText={retwitChange}
          maxLength={120}
          placeholder="@ Tag a celeb/club"
          placeholderTextColor="#c7c7c7"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 8, backgroundColor: '#fff' }}>
        <MaterialIcons name="arrow-back-ios" color="#111111" size={25} style={{ flex: 1 }} />
        <MaterialIcons name="panorama" color="#111111" size={30} style={{ flex: 1 }} onPress={attachImage} />
        <MaterialIcons name="place" color="#111111" size={30} style={{ flex: 1 }} onPress={locationPremission} />
        <MaterialIcons name="gif" color="#111111" size={30} style={{ flex: 1 }} />
        <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            style={{
              borderColor: '#bbbbb',
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 5,
              borderRadius: 4,
            }}
          >
            <Text>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FastImage
        style={{ height: 150, marginTop: 5 }}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
};

export default MovementForm;
