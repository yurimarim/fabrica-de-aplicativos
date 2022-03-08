import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard
} from 'react-native'
import firebase from './src/services/firebaseConnection'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  async function signIn() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        // alert(value.user.uid)
        firebase.database().ref('users').child(value.user.uid).set({
          name: name
        })
        alert('Usuário criado com sucesso!')
        setName('')
        setEmail('')
        setPassword('')
        Keyboard.dismiss()
      })
      .catch(err => {
        alert('Ops... parece que algo deu errado! 😥')
        setName('')
        setEmail('')
        setPassword('')
        Keyboard.dismiss()
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
        underlineColorAndroid="transparent"
      />

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
        secureTextEntry={true}
      />

      <Button title="Cadastrar" onPress={signIn} />
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
