import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'

import BancoSujeitoHeader from './src/components/BancoSujeitoHeader'
import TextInputComponent from './src/components/TextInput'

export default function App() {
  return (
    <View style={styles.container}>
      <BancoSujeitoHeader />
      <TextInputComponent placeholder="Digite seu nome" />

      <Slider></Slider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
