import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StackRoutes } from './stackRoutes'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#181818',
          borderTopWidth: 0
        },
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="file" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
