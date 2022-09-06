import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

function ErrorOverlay({message}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary800,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    color: GlobalStyles.colors.primary700,
  },
  text: {
    color: GlobalStyles.colors.error50,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
  },
});
