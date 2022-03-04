import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import firebase from './src/services/firebaseConnection'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  async function login() {
    await firebase
      .auth()
      // .createUserWithEmailAndPassword(email, password)
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        alert(`Bem-vindo: ${value.user.email}`)
        setUser(value.user.email)
      })
      .catch(error => {
        alert('Ops... algo deu errado! :(')
        return
      })

    setEmail('')
    setPassword('')
  }

  async function logout() {
    await firebase.auth().signOut()
    setUser('')
    alert('Deslogado com Sucesso!')
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

      <Button title="Acessar" onPress={login} />
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontSize: 23,
          textAlign: 'center'
        }}
      >
        {user}
      </Text>

      {user.length > 0 ? (
        <Button title="Logout" onPress={logout} />
      ) : (
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontSize: 23,
            textAlign: 'center'
          }}
        >
          Nenhum usuário está logado!
        </Text>
      )}
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
