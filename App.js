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

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

function ExpencesOverwiev() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: GlobalStyles.colors.primary900,
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerTitleAlign: 'center',
      }}>
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
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Expences Overwiev"
            component={ExpencesOverwiev}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Manage Expense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
