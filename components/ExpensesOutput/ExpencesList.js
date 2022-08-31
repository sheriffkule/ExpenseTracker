import React from 'react';
import {FlatList} from 'react-native';
import ExpenseItem from './ExpenceItem';

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpencesList({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
}

export default ExpencesList;
