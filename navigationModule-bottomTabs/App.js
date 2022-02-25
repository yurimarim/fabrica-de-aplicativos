import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'

import { Home } from './src/pages/Home'
import { About } from './src/pages/About'
import { Contact } from './src/pages/Contact'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#181818',
            borderTopWidth: 0
          }
          // tabBarShowLabel: false
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
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
    </NavigationContainer>
  )
}
