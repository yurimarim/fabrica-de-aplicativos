import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import firebase from './src/services/firebaseConnection'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function register() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        alert(`Usuário criado: ${value.user.email}`)
      })
      .catch(error => {
        if (error.code === 'auth/weak-password') {
          alert('Sua senha deve ter pelo menos 6 caracteres')
          return
        }
        if (error.code === 'auth/invalid-email') {
          alert('E-mail inválido!')
          return
        } else {
          alert('Ops... algo deu errado! :(')
          return
        }
      })

    setEmail('')
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        underlineColorAndroid="transparent"
      />

      <Text style={styles.text}>Password:</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        underlineColorAndroid="transparent"
      />

      <Button title="Cadastrar" onPress={register} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30
  },
  text: {
    fontSize: 20
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  },
  loading: {
    flex: 1
  }
})
