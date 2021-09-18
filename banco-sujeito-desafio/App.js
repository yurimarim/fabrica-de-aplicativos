import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native'
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'

import BancoSujeitoHeader from './src/components/BancoSujeitoHeader'
import TextInputComponent from './src/components/TextInput'

export default function App() {
  const [gender, setGender] = useState(0)
  const [valueSlider, setValueSlider] = useState(450)
  const [isStudent, setIsStudent] = useState(false) // booleans
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
        <Picker.Item key={1} value={1} label="Masculino" />
        <Picker.Item key={2} value={2} label="Feminino" />
      </Picker>

      <View style={styles.containerLimit}>
        <Text style={styles.textLimit}>Inserir seu limite</Text>
      </View>
      <Slider
        minimumValue={50}
        maximumValue={1000}
        value={valueSlider}
        onValueChange={valueSelected => setValueSlider(valueSelected)}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#dddeee"
      />
      <View style={styles.containerLimit}>
        <Text style={styles.textLimit}>{`R$  ${valueSlider.toFixed(0)}`}</Text>
      </View>

      <View style={styles.isStudentView}>
        <Text style={[styles.textName, styles.containerAlignItems]}>
          Você é um estudante?
        </Text>
        <Switch
          value={isStudent}
          onValueChange={valueSelected => setIsStudent(valueSelected)}
          trackColor={{ false: '#1C8DC7', true: '#1CC3C7' }}
          thumbColor="#fff"
        />
      </View>
      <View style={styles.containerSignUpBtn}>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpBtnText}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2438BA'
  },
  containerLimit: {
    display: 'flex',
    alignItems: 'center',
    margin: 15
  },
  containerSignUpBtn: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 90
  },
  isStudentView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  containerAlignItems: {
    marginBottom: 10
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15
  },
  textLimit: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
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
