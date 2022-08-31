import React from 'react';
import {FlatList, Text} from 'react-native';

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
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
