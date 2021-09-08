import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Usuario(props) {
  return (
    <View>
      <View style={styles.usersContainer}>
        <Text style={styles.textUsers}>{props.data.nome}</Text>
        <Text style={styles.textUsers}>{props.data.cargo}</Text>
        <Text style={styles.textUsers}>{props.data.email}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  usersContainer: {
    backgroundColor: '#121212',
    marginBottom: 20,
    padding: 20
  },
  textUsers: {
    color: '#fff',
    fontSize: 20,
    margin: 5
  }
})

export default Usuario
