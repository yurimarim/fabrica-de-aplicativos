import React, { useState, useRef } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { api } from './src/services/api'

export default function App() {
  const [cep, setCep] = useState('')
  const [data, setData] = useState(null)
  const inputRef = useRef(null)

  async function getData() {
    if (cep == '') {
      alert('Digite um CEP válido')
      setCep('')

      return
    }

    try {
      const response = await api.get(`/${cep}/json`)
      // console.log(response.data)
      setData(response.data)

      Keyboard.dismiss()
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }

  function clean() {
    setCep('')
    setData(null)
    inputRef.current.focus()
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          value={cep}
          onChangeText={text => setCep(text)}
          placeholder="Ex: 87064000"
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#1d75cd' }]}
          onPress={getData}
        >
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#cd3e1d' }]}
          onPress={clean}
        >
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* && => se tiver algo dentro do data, irá renderizar o que está abaixo. 
          && = se for diferente de null
      */}
      {data && (
        <View style={styles.result}>
          <Text style={styles.itemText}>{`CEP: ${data.cep}`}</Text>
          <Text
            style={[styles.itemText, { fontSize: 18 }]}
          >{`Logradouro: ${data.logradouro}`}</Text>
          <Text style={styles.itemText}>{`Bairro: ${data.bairro}`}</Text>
          <Text style={styles.itemText}>{`Cidade: ${data.localidade}`}</Text>
          <Text style={styles.itemText}>{`Estado: ${data.uf}`}</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: 25,
    backgroundColor: '#181818'
  },
  container: {
    marginTop: 25,
    alignItems: 'center'
  },
  text: {
    marginBottom: 15,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18
  },
  btnArea: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btn: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5
  },
  btnText: {
    fontSize: 20,
    color: '#fff'
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    color: '#fff',
    fontSize: 22
  }
})
