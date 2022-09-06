import React, {useContext, useLayoutEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import {ExpensesContex} from '../store/expenses-contex';
import ExpenseForm from '../components/ManageExpense/ExpenseForm.js';
import {storeExpense, updateExpense, deleteExpense} from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function ManageExpense({route, navigation}) {
  const [isSubmitting, setIsSubmiting] = useState(false);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContex);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === editedExpenseId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  async function deleteExpenseHandler() {
    setIsSubmiting(true);
    try {
      expensesCtx.deleteExpense(editedExpenseId);
      await deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - please try again later!');
      setIsSubmiting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmiting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({...expenseData, id: id});
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save data - please try again later!');
      setIsSubmiting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <ScrollView style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />
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
  deleteContainer: {
    marginTop: 20,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
