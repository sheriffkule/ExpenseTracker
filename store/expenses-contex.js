import React, {createContext, useReducer} from 'react';

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
    description: 'Some bananas',
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
  {
    id: 'e6',
    description: 'Some bananas',
    amount: 2.99,
    date: new Date('2022-08-12'),
  },
  {
    id: 'e7',
    description: 'A book',
    amount: 11.99,
    date: new Date('2022-08-02'),
  },
  {
    id: 'e8',
    description: 'Another book',
    amount: 18.49,
    date: new Date('2022-08-25'),
  },
  {
    id: 'e9',
    description: 'Javascript Course',
    amount: 9.99,
    date: new Date('2022-08-31'),
  },
];

export const ExpensesContex = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContexProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContex.Provider value={value}>{children}</ExpensesContex.Provider>
  );
}
export default ExpensesContexProvider;