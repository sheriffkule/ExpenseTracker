import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

function ExpencesSummary({expenses, periodName}) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpencesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 17,
    fontWeight: '500',
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 19,
    fontWeight: '900',
    color: GlobalStyles.colors.primary500,
  },
});
