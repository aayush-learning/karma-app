import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import { ThemeContext } from '../modules/Theme/themeContext';

const styles = StyleSheet.create({
  cardButton: { justifyContent: 'center', alignItems: 'center' },
  cardButtonText: { fontSize: 10, fontWeight: '200' },
  userInfoCardView: { padding: 5, paddingVertical: 10, borderRadius: 10, backgroundColor: 'grey' },
  userInfoCardView1: { flexDirection: 'row' },
  userInfoCardView2: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  followButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: 5,
    marginLeft: 20,
  },
  fastImageStyle: { height: 50, width: 50, borderRadius: 25 },
  userInfoCardView1Child: { flex: 1, marginLeft: 10 },
  userInfoCardView1Child1: { flexDirection: 'row', justifyContent: 'space-between' },
  userInfoCardView1Child1View: {
    flexDirection: 'row',
  },
});

const UserInfoCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const { following, followers, lockedAmount, unlockedAmount, userName, userDescription } = props;
  return (
    <View style={styles.userInfoCardView}>
      <View style={styles.userInfoCardView1}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={styles.fastImageStyle}
          source={{
            uri: 'https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL-770x503.jpg',
            cache: FastImage.cacheControl.immutable,
          }}
        />
        <View style={styles.userInfoCardView1Child}>
          <View style={styles.userInfoCardView1Child1}>
            <Text>{userName}</Text>
            <View style={styles.userInfoCardView1Child1View}>
              <MaterialIcons name="share" size={20} />
              <TouchableOpacity style={styles.followButton}>
                <Text>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text>{userDescription}</Text>
        </View>
      </View>
      <View style={styles.userInfoCardView2}>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>{followers}</Text>
          <MaterialIcons name="share" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>{following}</Text>
          <MaterialIcons name="share" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>{unlockedAmount}</Text>
          <MaterialIcons name="share" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>{lockedAmount}</Text>
          <MaterialIcons name="share" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

UserInfoCard.defaultProps = {
  followers: 0,
  following: 0,
  lockedAmount: 0,
  unlockedAmount: 0,
  userDescription: 'kjbgkgbkggbgbkgkgbkgbkgbkgbgkbkgbkgbkgbkgbgkgbkgbkgbkgbkgbkgbkg',
  userName: 'Aaayush',
};

UserInfoCard.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  lockedAmount: PropTypes.number,
  unlockedAmount: PropTypes.number,
  userDescription: PropTypes.string,
  userName: PropTypes.string,
};

export default UserInfoCard;
