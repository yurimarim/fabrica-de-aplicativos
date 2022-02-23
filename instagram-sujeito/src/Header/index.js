import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'

export function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../img/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../img/send.png')} style={styles.send} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    paddingTop: 50,
    paddingBottom: 25,
    paddingLeft: 15,
    paddingRight: 40,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  send: {
    width: 23,
    height: 23
  }
})
