import React from 'react';
import {View, Text} from 'react-native';

function ExpencesSummary({expenses, periodName}) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum}.toFixed(2)</Text>
    </View>
  );
}

export default ExpencesSummary;