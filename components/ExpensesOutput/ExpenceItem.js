import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../../constants/styles';
import {getFormattedDate} from '../../util/date';
//import IconButton from '../UI/IconButton';

function ExpenseItem({description, amount, date}) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense');
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}
      android_ripple={{color: GlobalStyles.colors.primary500}}>
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
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 7,
    borderWidth: 1,
    elevation: 5,
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
