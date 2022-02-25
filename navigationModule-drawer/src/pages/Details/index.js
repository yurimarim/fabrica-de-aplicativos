import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: '#fff'
  }
})
