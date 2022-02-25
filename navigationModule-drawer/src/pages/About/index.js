import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página About</Text>
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
