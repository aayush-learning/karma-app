import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FloatingButton from '../commonComponents/FloatingButton';
// there are two approaches to making wrapper
// 1. this itself wehre we are just rendering the other wrappers as children under this, as View with position as absolute or as modals
// 2. Making a react navigation modal for each popup or modal as explained here  -> https://reactnavigation.org/docs/modal/
const Wrapper = (props) => {
  const { buySellPropsData = {}, isShowBuySellModal } = props;
  const BuySellModal = isShowBuySellModal && require('../screens/popularityIndex/BuyModal').default;

  return (
    <View style={{ flex: 1 }}>
      {isShowBuySellModal && BuySellModal && <BuySellModal {...buySellPropsData} />}
      {props.children}
      {/* <FloatingButton /> */}
    </View>
  );
};

Wrapper.defaultProps = {
  isShowBuySellModal: false,
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isShowBuySellModal: PropTypes.bool,
};

const mapStateToProps = (reduxState) => ({
  isShowBuySellModal: reduxState.PopularityIndexReducer.isShowBuySellModal,
  buySellPropsData: reduxState.PopularityIndexReducer.buySellPropsData,
});
export default connect(mapStateToProps, null)(Wrapper);
