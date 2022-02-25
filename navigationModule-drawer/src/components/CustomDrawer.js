import React from 'react'
import { View, Text, Image } from 'react-native'

import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

export function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          height: 85,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}
      >
        <Image
          source={require('../assets/img/profile.png')}
          style={{ width: 65, height: 65 }}
        />

        <Text
          style={{
            color: '#FFF',
            fontSize: 17,
            marginTop: 10,
            marginBottom: 35
          }}
        >
          Bem-vindo!
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
