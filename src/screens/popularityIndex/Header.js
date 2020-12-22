import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const header = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ justifyContent: 'flex-start', flex: 0.2 }} />

      <View style={{ flex: 0.4 }}>
        <Text>Entity</Text>
      </View>
      <View style={{ flex: 0.2 }}>
        <Text>Current</Text>
      </View>
      <View style={{ flex: 0.2 }}>
        <Text>%Change</Text>
      </View>
      <View style={{ flex: 0.2 }} />
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  cardContainer: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFF',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
});
