import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {getFormattedDate} from '../../util/date';

function ExpenseItem({description, amount, date}) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 7,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary10,
  },
  description: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '500',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#f8e4c1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 70,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: '800',
    fontSize: 15,
  },
});
