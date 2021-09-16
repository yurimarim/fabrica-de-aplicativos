import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'

import BancoSujeitoHeader from './src/components/BancoSujeitoHeader'
import TextInputComponent from './src/components/TextInput'

export default function App() {
  const [gender, setGender] = useState(0)
  const [valueSlider, setValueSlider] = useState(450)
  return (
    <View style={styles.container}>
      <BancoSujeitoHeader />
      <Text style={styles.textName}>Nome</Text>
      <TextInputComponent placeholder="Ex: Yuri" />
      <Text style={styles.textName}>Idade</Text>
      <TextInputComponent placeholder="Ex: 21" />
      <Picker
        style={styles.picker}
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item key={0} value={0} label="Sexo" />
        <Picker.Item key={0} value={0} label="Masculino" />
        <Picker.Item key={0} value={0} label="Feminino" />
      </Picker>

      <Text>Inserir seu limite</Text>
      <Slider
        minimumValue={50}
        maximumValue={1000}
        value={valueSlider}
        onValueChange={valueSelected => setValueSlider(valueSelected)}
      />
      <Text>{`R$  ${valueSlider}`}</Text>

      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.signUpBtnText}>Abrir Conta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2438BA'
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15
  },
  picker: {
    color: '#fff',
    marginLeft: 8,
    marginBottom: 15
  },
  signUpBtn: {
    backgroundColor: '#1C8DC7',
    width: 120,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signUpBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
