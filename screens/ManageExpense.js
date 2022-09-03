import React, {useContext, useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpensesContex} from '../store/expenses-contex';
import ExpenseForm from '../components/ManageExpense/ExpenseForm.js';

function ManageExpense({route, navigation}) {
  const expensesCtx = useContext(ExpensesContex);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: 'test!!!!!',
        amount: 9.99,
        date: new Date('2022-08-31'),
      });
    } else {
      expensesCtx.addExpense({
        description: 'test',
        amount: 14.99,
        date: new Date('2022-09-01'),
      });
    }
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button style={styles.buttonStyle} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.buttonStyle} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={50}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </ScrollView>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    minWidth: 140,
    marginHorizontal: 10,
    marginTop: 20,
  },
  deleteContainer: {
    marginTop: 20,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
