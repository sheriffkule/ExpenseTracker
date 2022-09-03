import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {GlobalStyles} from '../../constants/styles';

function Input({label, textInputConfig}) {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary200,
    marginBottom: 5,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary200,
    color: GlobalStyles.colors.primary500,
    padding: 5,
    borderRadius: 8,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
