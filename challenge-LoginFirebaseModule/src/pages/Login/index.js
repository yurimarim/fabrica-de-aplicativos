import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import firebase from '../../services/firebaseConnection'

export function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function back() {
    navigation.navigate('SignUp')
  }

  async function login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        alert(`LOGADO COM SUCESSO! 🔥🚀 ${value.user.email}`)
        navigation.navigate('Home')
        Keyboard.dismiss()
      })
      .catch(err => {
        alert('Ops... parece que algo inesperado aconteceu! 😥')
        Keyboard.dismiss()
      })
    setEmail('')
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENTRAR</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>E-mail:</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Entre com seu e-mail"
          placeholderTextColor="#a9a9a9"
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Entre com sua senha"
          placeholderTextColor="#a9a9a9"
          secureTextEntry={true}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={login} style={styles.loginButton}>
          <Text style={styles.btnText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={back} style={styles.backButton}>
          <Text style={styles.btnText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 60
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  inputContainer: {
    margin: 35
  },
  input: {
    height: 42,
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#c9c9c9',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: '#fd1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5
  },
  btnText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  backButton: {
    backgroundColor: '#fd1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5
  }
})
