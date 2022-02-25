import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

const Stack = createStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#181818'
          },
          headerTintColor: '#fff',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: '#181818'
          },
          headerTintColor: '#fff',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
