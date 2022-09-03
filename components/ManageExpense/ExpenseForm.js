import React from 'react';
import {View} from 'react-native';

import Input from './Input';

function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        TextInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        TextInputConfig={{
          placeholder: 'YYY-MM-DD',
          maxLengh: '10',
          onChangeText: () => {},
        }}
      />
      <Input label="Description" textInputConfig={{}} />
    </View>
  );
}

export default ExpenseForm;
