import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Initial } from './src/pages/Initial'
import { Home } from './src/pages/Home'
import { About } from './src/pages/About'
import { Contact } from './src/pages/Contact'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tela Inicial"
          component={Initial}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#212121'
            },

            headerTintColor: '#fff'
            // headerShown: false
          }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'Tela About',
            headerStyle: {
              backgroundColor: '#212121'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerStyle: {
              backgroundColor: '#212121'
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
