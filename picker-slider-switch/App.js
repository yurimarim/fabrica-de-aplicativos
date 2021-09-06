import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

export default function App() {
  const [carSelected, setCarSelected] = useState(0)
  const [cars, setCars] = useState([
    { key: 1, name: 'Golf 1.6', value: 62.0 },
    { key: 2, name: 'Saveiro 1.0', value: 39.4 },
    { key: 3, name: 'Gol 1.3', value: 25.0 },
    { key: 4, name: 'Fusca 2.0', value: 15.0 },
    { key: 5, name: 'Fiat Uno 1.0', value: 20.0 }
  ])

  const [valueSlider, setValueSlider] = useState(50)
  const [status, setStatus] = useState(false)

  let carsItem = cars.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.name} />
  })

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={carSelected}
        // onValueChange recebe dois parâmetros, o valor e o index do item
        onValueChange={(itemValue, itemIndex) => setCarSelected(itemValue)}
      >
        {carsItem}
      </Picker>

      <Text style={styles.cars}>Carro: {cars[carSelected].name}</Text>
      <Text style={styles.cars}>
        {`Valor: R$ ${cars[carSelected].value.toFixed(3)}`}
      </Text>
      <View>
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={valueSlider}
          onValueChange={valueSelected => setValueSlider(valueSelected)}
          minimumTrackTintColor="#0000FF"
          maximumTrackTintColor="#FF0000"
          thumbTintColor="#00FF00"
        />
        <Text style={{ textAlign: 'center', fontSize: 25 }}>
          Você tem: {valueSlider.toFixed(0)} kg.
        </Text>
      </View>

      <View>
        <Switch
          value={status}
          onValueChange={valueSelected => setStatus(valueSelected)}
          trackColor={{ false: '#121212', true: '#00ff00' }}
          thumbColor={status ? '#121212' : '#f4f4f4'}
        />
        <Text style={{ textAlign: 'center', fontSize: 25 }}>
          Status: {status ? 'ATIVO' : 'INATIVO'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35
  },
  cars: {
    marginTop: 15,
    fontSize: 25
  }
})
