import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import font from '../../../asset/Font/Font';
import color from '../../../asset/Color/Color';
import { normalize } from '../../../Utils/utils';
import { getMyPortfolio } from '../redux/profile.actions';

const Data = [
  {
    title: ['Stock', 'Qunatity', 'Buy Price', 'CP', 'P/L'],
    celebs: [
      {
        name: 'Trump',
        imageUrl: 'https://picsum.photos/200/300',
        qunatity: 25,
        ownPrice: 45,
        currentPrice: 50,
        profitOrLoss: 5,
      },
      {
        name: 'Modi',
        imageUrl: 'https://picsum.photos/300/400',
        qunatity: 25,
        ownPrice: 45,
        currentPrice: 50,
        profitOrLoss: 5,
      },
      {
        name: 'Kate',
        imageUrl: 'https://picsum.photos/600/700',
        qunatity: 25,
        ownPrice: 45,
        currentPrice: 50,
        profitOrLoss: 5,
      },
      {
        name: 'Amit shah',
        imageUrl: 'https://picsum.photos/900/100',
        qunatity: 25,
        ownPrice: 45,
        currentPrice: 40,
        profitOrLoss: 5,
      },
      {
        name: 'ankit shah',
        imageUrl: 'https://picsum.photos/900/100',
        qunatity: 25,
        ownPrice: 45,
        currentPrice: 40,
        profitOrLoss: 5,
      },
    ],
  },
];

const PortfolioTable = ({ getMyPortfolio = () => {}, myPortfolio = [] }) => {
  useEffect(() => {
    getMyPortfolio(7);
  }, []);

  return (
    <View>
      {Data.map((celebsObj) => {
        return (
          <View style={{ borderColor: color.borderColor, borderWidth: 1, margin: 12, fontSize: font.fontSize16 }}>
            <View style={{ flexDirection: 'row', padding: 16 }}>
              {celebsObj.title.map((keys) => (
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{keys}</Text>
                </View>
              ))}
            </View>
            <View>
              {celebsObj.celebs.map((keys, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 8,
                    alignItems: 'center',
                    backgroundColor: index % 2 !== 0 ? '#f2f2f2' : color.bgWhite,
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <FastImage
                      source={{
                        uri: keys.imageUrl,
                      }}
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: font.semiBold, fontSize: normalize(font.fontSize14) }}>
                      {keys.qunatity}
                    </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: font.semiBold, fontSize: normalize(font.fontSize14) }}>
                      {keys.ownPrice}
                    </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: font.semiBold, fontSize: normalize(font.fontSize14) }}>
                      {keys.currentPrice}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                    }}
                  >
                    <Text style={{ color: keys.currentPrice < keys.ownPrice ? 'red' : 'green' }}>
                      {keys.profitOrLoss}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};
const mapStateToProps = (reduxState) => ({
  myPortfolio: reduxState.profileReducer.myPortfolio,
});
// const mapDispatchToProps = (dispatch) => ({
//   getMyPortfolio: (userId) => dispatch(getMyPortfolio(userId)),
// });

export default connect(mapStateToProps, { getMyPortfolio })(PortfolioTable);
