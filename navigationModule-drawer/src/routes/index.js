import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { StackRoutes } from './stackRoutes'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { CustomDrawer } from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()

export function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#212121'
        },
        drawerActiveBackgroundColor: '#121212',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#080808',
        drawerInactiveTintColor: '#fff'
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        // options={{
        //   headerStyle: {
        //     backgroundColor: '#181818'
        //   },
        //   headerTintColor: '#fff'
        // }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        // options={{
        //   headerStyle: {
        //     backgroundColor: '#181818'
        //   },
        //   headerTintColor: '#fff'
        // }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        // options={{
        //   headerStyle: {
        //     backgroundColor: '#181818'
        //   },
        //   headerTintColor: '#fff'
        // }}
      />
    </Drawer.Navigator>
  )
}
