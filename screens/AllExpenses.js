import React, {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContex} from '../store/expenses-contex';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContex);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found."
    />
  );
}

export default AllExpenses;
