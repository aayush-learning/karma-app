import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import { ThemeContext } from '../modules/Theme/themeContext';

const styles = StyleSheet.create({
  cardButton: { justifyContent: 'center', alignItems: 'center' },
  cardButtonText: { fontSize: 10, fontWeight: '200' },
  feedCardView: { padding: 5, borderRadius: 10 },
  feedCardView1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  feedCardView2: { marginVertical: 10 },
  feedCardView3: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  imageStyle: { height: 100, marginTop: 5 },
  feedCardView1ChildView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedCardView1ChildViewText: { fontSize: 20, fontWeight: '500' },
  favouriteIcon: { marginRight: 20 },
});

const FeedCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const { likes, dislikes, forVotes, againstVotes, comment, hashtag, contentDescription } = props;
  return (
    <View style={styles.feedCardView}>
      <View style={styles.feedCardView1}>
        <Text style={styles.feedCardView1ChildViewText}>{`#${hashtag}`}</Text>
        <View style={styles.feedCardView1ChildView}>
          <MaterialIcons size={20} style={styles.favouriteIcon} name="favorite" />
          <MaterialIcons size={20} name="share" />
        </View>
      </View>
      <View style={styles.feedCardView2}>
        <Text>{contentDescription}</Text>
        <FastImage
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.imageStyle}
          source={{
            uri: 'https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL-770x503.jpg',
            cache: FastImage.cacheControl.immutable,
          }}
        />
      </View>
      <View style={styles.feedCardView3}>
        <TouchableOpacity style={styles.cardButton}>
          <MaterialIcons name="share" />
          <Text style={styles.cardButtonText}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <MaterialIcons name="share" />
          <Text style={styles.cardButtonText}>{dislikes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <MaterialIcons name="share" />
          <Text style={styles.cardButtonText}>{forVotes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <MaterialIcons name="share" />
          <Text style={styles.cardButtonText}>{againstVotes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <MaterialIcons name="share" />
          <Text style={styles.cardButtonText}>{comment}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

FeedCard.defaultProps = {
  likes: 0,
  dislikes: 0,
  againstVotes: 0,
  forVotes: 0,
  comment: 0,
  hashtag: 'aayush',
  contentDescription: 'lkngkbgkbgkbgbgkbgkgbkgbjkgbkgbgkbgjkbgjbgjbgjbgjbgjbgjbgjgjb',
};

FeedCard.propTypes = {
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  forVotes: PropTypes.number,
  againstVotes: PropTypes.number,
  comment: PropTypes.number,
  hashtag: PropTypes.string,
  contentDescription: PropTypes.string,
};

export default FeedCard;
