import React from 'react';
import {View} from 'react-native';
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
    <View>
      <ExpencesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpencesList />
    </View>
  );
}

export default ExpensesOutput;
