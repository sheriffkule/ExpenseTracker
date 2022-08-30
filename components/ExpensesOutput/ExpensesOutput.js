import React from 'react';
import {View} from 'react-native';
import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummary';

function ExpensesOutput({expenses}) {
  return (
    <View>
      <ExpencesSummary />
      <ExpencesList />
    </View>
  );
}

export default ExpensesOutput;
