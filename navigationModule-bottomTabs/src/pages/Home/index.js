import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 25,
    color: '#fff'
  }
})
