import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

function App() {
  const [name, setName] = useState('')
  const [input, setInput] = useState('')

  function join() {
    if (input === '') {
      alert('Digite seu nome!')
      return
    }
    setName(`Bem-vindo ${input}`)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={text => setInput(text)}
      />
      <Button title="Entrar" onPress={join} />

      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    marginTop: 30,
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15
  }
})

export default App
