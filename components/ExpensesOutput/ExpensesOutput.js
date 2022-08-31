import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpencesList from './ExpencesList';
import ExpencesSummary from './ExpencesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 49.99,
    date: new Date('2022-08-31'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 59.99,
    date: new Date('2022-07-21'),
  },
  {
    id: 'e3',
    description: 'SOme bananas',
    amount: 2.99,
    date: new Date('2022-08-12'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 11.99,
    date: new Date('2022-08-02'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.49,
    date: new Date('2022-08-25'),
  },
];

function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpencesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpencesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: GlobalStyles.colors.primary800,
  },
});
