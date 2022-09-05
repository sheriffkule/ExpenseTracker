import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://expense-tracker-60f7d-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    expenseData,
  );
}
