import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

import Input from './Input';

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues(curInputValues => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount /* ['amount'] */,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date /* ['date'] */,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          textAlignVertical: 'top',
          autoCorrect: false,
          autoCapitalize: 'words',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description /* ['description'] */,
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: GlobalStyles.colors.primary900,
    marginVertical: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});
