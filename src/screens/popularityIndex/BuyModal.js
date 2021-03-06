import React, { useState } from 'react';
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Picker } from '@react-native-picker/picker';
import { connect } from 'react-redux';
import color from '../../asset/Color/Color';
import Width from '../../asset/Contants/Width';
import Font from '../../asset/Font/Font';
import { normalize } from '../../Utils/utils';
import { showBuySellModal } from './redux/popularityIndex.actions';

const BuyModal = ({ screenShow = '', showBuySellModal }) => {
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [selectedValue, setSelectedValue] = useState('Market');

  const onQantityChange = (val) => setQuantity(val);

  const onPriceChange = (val) => setPrice(val);

  const onBuyClicked = () => {
    showBuySellModal(false);
  };

  const onCancelClicked = () => {
    showBuySellModal(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible
      onRequestClose={() => {
        showBuySellModal(false);
      }}
    >
      <TouchableOpacity style={styles.modalContainer} onPress={() => showBuySellModal(false)}>
        <TouchableWithoutFeedback>
          <View style={styles.modalBackGroundStyle}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1.2 }}>
                <FastImage
                  resizeMode={FastImage.resizeMode.stretch}
                  style={{ width: 30, height: 30, borderRadius: 30 }}
                  source={{
                    uri: 'https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL-770x503.jpg',
                    cache: FastImage.cacheControl.immutable,
                  }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={styles.stockName}>Xi Jinping</Text>
                <Text style={styles.stockTag}>@jinping</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.currentPrice}>832.54</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.todayPL}>+21.15%</Text>
              </View>
            </View>
            <View style={styles.inputSection}>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ width: Width['20w'] }}>
                    <Text style={styles.inputFieldStyle}>Quantity </Text>
                  </View>
                  <View style={{ width: Width['40w'] }}>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 4 }}
                      onChangeText={(text) => onQantityChange(text)}
                      value={quantity}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: Width['20w'] }}>
                    <Text style={styles.inputFieldStyle}>Order </Text>
                  </View>
                  <View style={{ width: Width['40w'] }}>
                    <Picker
                      selectedValue={selectedValue}
                      style={{ height: 50, borderWidth: 1, borderColor: 'gray' }}
                      onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                      <Picker.Item label="Market" value="Market" />
                      <Picker.Item label="Limit" value="Limit" />
                      <Picker.Item label="AMO" value="AMO" />
                    </Picker>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: Width['20w'] }}>
                    <Text style={styles.inputFieldStyle}>Price </Text>
                  </View>
                  <View style={{ width: Width['40w'] }}>
                    <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 4 }}
                      onChangeText={(text) => onPriceChange(text)}
                      value={price}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.btnSectionStyle}>
              <TouchableOpacity onPress={onCancelClicked} style={styles.cancelButton}>
                <Text style={styles.cancelBtnStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onBuyClicked} style={styles.buyButton}>
                <Text style={styles.buyBtnStyles}>{screenShow}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
      {/* </TouchableOpacity> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBackGroundStyle: {
    backgroundColor: 'white',
    borderColor: color.modalBorderColor,
    borderWidth: 1,
    borderRadius: 8,
    width: Width['90w'],
    padding: 35,
    alignItems: 'center',
    shadowColor: color.modalBorderColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputSection: {
    flexDirection: 'row',
    marginTop: 32,
  },
  btnSectionStyle: {
    flexDirection: 'row',
    marginTop: 32,
  },
  cancelButton: {
    width: 100,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: color.grayShade3,
    borderWidth: 1,
    borderRadius: 4,
  },
  buyButton: {
    width: 100,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: color.grayShade3,
    borderWidth: 1,
    borderRadius: 4,
  },
  todayPL: {
    color: color.upGreen,
    fontFamily: Font.semiBold,
    fontSize: normalize(Font.fontSize16),
  },
  currentPrice: {
    fontSize: normalize(Font.fontSize16),
    fontFamily: Font.semiBold,
  },
  stockName: {
    fontSize: normalize(Font.fontSize16),
    fontFamily: Font.semiBold,
  },
  stockTag: {
    fontSize: normalize(Font.fontSize14),
    fontFamily: Font.regular,
    color: color.grayShade3,
  },
  cancelBtnStyle: {
    fontSize: normalize(Font.fontSize16),
    fontFamily: Font.semiBold,
  },
  buyBtnStyles: {
    fontSize: normalize(Font.fontSize16),
    fontFamily: Font.semiBold,
  },
  inputFieldStyle: {
    fontSize: normalize(Font.fontSize16),
    fontFamily: Font.regular,
  },
});

const mapDispatchToProps = { showBuySellModal };

export default connect(null, mapDispatchToProps)(BuyModal);
