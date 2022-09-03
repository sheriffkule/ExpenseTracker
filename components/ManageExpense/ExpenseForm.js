import React from 'react';
import {View} from 'react-native';

import Input from './Input';

function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        placeholderTextColor={'#87cefa'}
        TextInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        placeholderTextColor={'#87cefa'}
        TextInputConfig={{
          placeholder: 'YYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        placeholderTextColor="#87cefa"
        TextInputConfig={{
          multiline: true,
          textAlignVertical: 'top',
          autoCorrect: false,
          autoCapitalize: 'words',
        }}
      />
    </View>
  );
}

export default ExpenseForm;
