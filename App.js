import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

import {GlobalStyles} from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContexProvider from './store/expenses-contex';

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

function ExpencesOverwiev() {
  return (
    <BottomTabs.Navigator
      initialRouteName="AllExpenses"
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: GlobalStyles.colors.primary900,
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerTitleAlign: 'center',
        headerRight: ({tintColor}) => (
          <IconButton
            icon="add"
            size={35}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpences"
        component={RecentExpenses}
        options={{
          headerTitleAlign: 'center',
          title: 'Recent Expences',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="All Expences"
        component={AllExpenses}
        options={{
          title: 'All Expences',
          tabBarLabel: 'All Expences',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStylef={'light-content'} />
      <ExpensesContexProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: GlobalStyles.colors.primary900,
              tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
              tabBarActiveTintColor: GlobalStyles.colors.accent500,
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="Expences Overwiev"
              component={ExpencesOverwiev}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: 'modal',
                animation: 'fade',
                animationTypeForReplace: 'pop',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContexProvider>
    </>
  );
}
