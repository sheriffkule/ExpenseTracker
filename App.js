import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expense Tracker Basic Setup</Text>
      <StatusBar barStyle={'light-content'} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
