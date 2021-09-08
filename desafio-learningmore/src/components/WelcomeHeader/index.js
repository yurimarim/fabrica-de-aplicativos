import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function WelcomeHeader() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textHeader}>Seja bem-vindo!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center'
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default WelcomeHeader
