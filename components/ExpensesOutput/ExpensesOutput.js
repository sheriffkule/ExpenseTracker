import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummary';

function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpencesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpencesList expenses={expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary800,
  },
});
