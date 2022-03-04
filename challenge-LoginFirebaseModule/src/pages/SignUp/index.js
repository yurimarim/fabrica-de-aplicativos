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

export function SignUp() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function navigateLoginPage() {
    navigation.navigate('Login')
  }

  async function signUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        alert(`Usuário cadastrado com sucesso! ${value.user.email}`)
        Keyboard.dismiss()
      })
      .catch(error => {
        alert('Ops... parece que algo deu errado! 😥')
        Keyboard.dismiss()
      })

    setEmail('')
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRAR</Text>
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

      <View style={styles.signUpContainer}>
        <TouchableOpacity onPress={signUp} style={styles.signUpButton}>
          <Text style={styles.btnText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.alreadySignUpContainer}>
        <TouchableOpacity
          onPress={navigateLoginPage}
          style={styles.signUpButton}
        >
          <Text style={styles.btnText}>JÁ POSSUI CONTA?</Text>
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
  signUpContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpButton: {
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
  alreadySignUpContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  alreadySignUp: {
    backgroundColor: '#fd1',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
  }
})
