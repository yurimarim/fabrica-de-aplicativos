import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      {/* tirar barra de scroll vertical
      showsVerticalScrollIndicator={false} 
          deixar scrollview na horizontal passar propriedade
      horizontal={true} 
          tirar barra de scroll horizontal
      showsHorizontalScrollIndicator={false}
      
      • ScrollView ao carregar, irá carregar todos os componentes dentro do ScrollView
      • Já o FlatList irá renderizar conforme vai descendo a tela, aumentando a performance do app
      */}
      <ScrollView>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box2}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    height: 250,
    backgroundColor: 'red'
  },
  box2: {
    height: 250,
    backgroundColor: 'green'
  },
  box3: {
    height: 250,
    backgroundColor: 'yellow'
  },
  box4: {
    height: 250,
    backgroundColor: 'blue'
  }
})
