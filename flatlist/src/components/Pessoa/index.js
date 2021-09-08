import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Pessoa(props) {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textPerson}>{props.data.nome}</Text>
      <Text style={styles.textPerson}>{props.data.idade} anos</Text>
      <Text style={styles.textPerson}>{props.data.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#123123',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center'
  },
  textPerson: {
    color: '#fff',
    fontSize: 20
  }
})

export default Pessoa
