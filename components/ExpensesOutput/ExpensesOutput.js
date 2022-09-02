import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummary';

function ExpensesOutput({expenses, expensesPeriod, fallbackText}) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.lenght > 0) {
    content = <ExpencesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpencesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});
