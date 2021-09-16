import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function BancoSujeitoHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textHeader}>Banco Sujeito</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  }
})

export default BancoSujeitoHeader
