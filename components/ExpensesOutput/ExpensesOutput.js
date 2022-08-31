import React from 'react';
import {View} from 'react-native';
import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummary';

function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View>
      <ExpencesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpencesList />
    </View>
  );
}

export default ExpensesOutput;
