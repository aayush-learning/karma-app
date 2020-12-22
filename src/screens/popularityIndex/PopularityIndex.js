import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import Marquee from '../../commonComponents/Marquee';
import Cards from './Cards';
import Header from './Header';
import StoreProfessionFilter from './StoreProfessionFilter';
import { getCelebrityStockList } from './redux/actions';
import Ticker from './Ticker';

const PopularityIndex = (props) => {
  const { getCelebrityStockList, stockListData } = props;

  const TestApi = () => {
    getCelebrityStockList();
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 5 }}>
      <TouchableOpacity onPress={TestApi}>
        <Text>Click to Test Get Api</Text>
      </TouchableOpacity>
      <Image
        source={{ uri: stockListData?.url }}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <Marquee duration={25000}>
        <ScrollView>
          <Ticker />
        </ScrollView>
      </Marquee>
      <StoreProfessionFilter />

      {/* <Header /> */}
      <Cards />
    </View>
  );
};

const mapStateToProps = (reduxState) => ({
  stockListData: reduxState.PopularityIndexReducer.stockListData,
});
const mapDispatchToProps = (dispatch) => ({
  getCelebrityStockList: () => dispatch(getCelebrityStockList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PopularityIndex);
