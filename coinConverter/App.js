import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Picker from './src/components/Picker'
import { api } from './src/services/api'

export default function App() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCoin, setSelectedCoin] = useState(false)
  const [valueInput, setValueInput] = useState(0)
  const [coinValue, setCoinValue] = useState(null)
  const [convertedValue, setConvertedValue] = useState(0)

  useEffect(() => {
    async function loadCoins() {
      const response = await api.get('all')

      // console.log(response.data)
      let arrayCoins = []
      Object.keys(response.data).map(key => {
        arrayCoins.push({
          key: key,
          label: key,
          value: key
        })
      })

      setCoins(arrayCoins)
      setLoading(false)
    }

    loadCoins()
  }, [])

  async function converter() {
    if (selectedCoin === null || valueInput === 0) {
      alert('Por favor, selecione uma moeda')
      return
    }

    const response = await api.get(`all/${selectedCoin}-BRL`)
    // console.log(response.data[selectedCoin].ask)

    let result = response.data[selectedCoin].ask * parseFloat(valueInput)
    setConvertedValue(`R$ ${result.toFixed(2)}`)
    setCoinValue(valueInput)

    // Aqui fecha o teclado, caso esteja aberto.
    Keyboard.dismiss()
  }

  if (loading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator color="#fff" size={45} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#909090" />
        <View style={styles.coinArea}>
          <Text style={styles.title}>Selecione sua moeda</Text>
          <Picker coins={coins} onChange={coins => setSelectedCoin(coins)} />
        </View>

        <View style={styles.valueArea}>
          <Text style={styles.title}>
            Digite um valor para converter em (R$)
          </Text>
          <TextInput
            placeholder="EX: 150"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={value => setValueInput(value)}
          />
        </View>

        <TouchableOpacity style={styles.btnArea} onPress={converter}>
          <Text style={styles.btnText}>Converter</Text>
        </TouchableOpacity>

        {convertedValue !== 0 && (
          <View style={styles.responseArea}>
            <Text style={styles.responseText}>
              {coinValue} {selectedCoin}
            </Text>
            <Text style={[styles.responseText, { fontSize: 18, margin: 10 }]}>
              Corresponde a
            </Text>
            <Text style={styles.responseText}>{convertedValue}</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    paddingTop: 40
  },
  coinArea: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 1
  },
  title: {
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5
  },
  valueArea: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingTop: 9,
    paddingBottom: 9
  },
  input: {
    width: '100%',
    height: 45,
    padding: 10,
    fontSize: 20,
    marginTop: 9,
    color: '#000'
  },
  btnArea: {
    width: '90%',
    height: 45,
    backgroundColor: '#fb4b57',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  responseArea: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  responseText: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000'
  }
})
