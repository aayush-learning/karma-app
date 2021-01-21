import React, { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Marquee from '../../commonComponents/Marquee';
import Cards from './Cards';
import StoreProfessionFilter from './storeProfessionFilter';
import { getCelebrityStockList, getCelebrityStockCetgories, showBuySellModal } from './redux/popularityIndex.actions';
import Ticker from './Ticker';

const PopularityIndex = (props) => {
  const {
    getCelebrityStockList,
    stockListData,
    getCelebrityStockCetgories,
    stockCategoryFilters,
    stockDataLoading,
    showBuySellModal,
  } = props;

  useEffect(() => {
    getCelebrityStockCetgories(true);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 5 }}>
      <View style={{ marginTop: 10 }}>
        <Marquee duration={25000} stockListData={stockListData}>
          <ScrollView>
            <Ticker />
          </ScrollView>
        </Marquee>
      </View>

      <StoreProfessionFilter
        stockCategoryFilters={stockCategoryFilters}
        getCelebrityStockList={getCelebrityStockList}
      />

      {/* <Header /> */}
      {stockDataLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <Cards stockListData={stockListData} showBuySellModal={showBuySellModal} />
      )}
    </View>
  );
};

const mapStateToProps = (reduxState) => ({
  stockListData: reduxState.PopularityIndexReducer.stockListData.map((item, index) => ({ key: `${index}`, ...item })),
  stockCategoryFilters: reduxState.PopularityIndexReducer.stockCategories,
  stockDataLoading: reduxState.PopularityIndexReducer.stockDataLoading,
});
const mapDispatchToProps = { getCelebrityStockList, getCelebrityStockCetgories, showBuySellModal };

export default connect(mapStateToProps, mapDispatchToProps)(PopularityIndex);
