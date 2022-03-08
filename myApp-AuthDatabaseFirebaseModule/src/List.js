import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function List({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.text}>{data.role}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#121212'
    // display: 'flex',
    // flexDirection: 'row'
  },
  text: {
    color: '#fff',
    fontSize: 17,
    paddingLeft: 10
  }
})
