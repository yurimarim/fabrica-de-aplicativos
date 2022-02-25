import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export function DetailModal({ movie, back }) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnBack} onPress={back}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.secondaryTitle}>Sinopse:</Text>
        <Text style={styles.sinopse}>{movie.sinopse}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    width: '97%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnBack: {
    backgroundColor: '#e54246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  title: {
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  secondaryTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
    marginLeft: 10
  },
  sinopse: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10
  }
})
