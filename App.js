import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

function ExpencesOverwiev() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Recent Expences" component={RecentExpenses} />
      <BottomTabs.Screen name="All Expences" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpencesOverwiev" component={ExpencesOverwiev} />
          <Stack.Screen name="Manage Expense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
