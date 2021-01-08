import React, { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import Marquee from '../../commonComponents/Marquee';
import Cards from './Cards';
import Header from './Header';
import StoreProfessionFilter from './storeProfessionFilter';
import { getCelebrityStockList } from './redux/actions';
import Ticker from './Ticker';

const PopularityIndex = (props) => {
  const { getCelebrityStockList, stockListData } = props;

  useEffect(() => {
    getCelebrityStockList(1);
  }, [getCelebrityStockList]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 5 }}>
      <View style={{ marginTop: 10 }}>
        <Marquee duration={25000} stockListData={stockListData}>
          <ScrollView>
            <Ticker />
          </ScrollView>
        </Marquee>
      </View>

      <StoreProfessionFilter />

      {/* <Header /> */}
      <Cards stockListData={stockListData} />
    </View>
  );
};

const mapStateToProps = (reduxState) => ({
  stockListData: reduxState.PopularityIndexReducer.stockListData.map((item, index) => ({ key: `${index}`, ...item })),
});
const mapDispatchToProps = { getCelebrityStockList };

// const mapDispatchToProps = (dispatch) => ({
//   getCelebrityStockList: (categoryId) => dispatch(getCelebrityStockList(categoryId)),
// });
export default connect(mapStateToProps, mapDispatchToProps)(PopularityIndex);
