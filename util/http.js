import axios from 'axios';

const BACKEND_URL =
  'https://expense-tracker-60f7d-default-rtdb.europe-west1.firebasedatabase.app/';

export async function storeExpense(expenseData) {
  const response = axios.post(BACKEND_URL + '/expense.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  //console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
