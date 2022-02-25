import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  function navigationDetails() {
    navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Home</Text>
      <TouchableOpacity style={styles.btnArea} onPress={navigationDetails}>
        <Text style={styles.btnText}>Detalhes</Text>
        <Feather name="info" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnArea}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.btnText}>Abrir Drawer</Text>
        <Feather name="menu" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 25,
    color: '#fff'
  },
  btnArea: {
    backgroundColor: '#090910',
    marginTop: 15,
    padding: 6,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    marginRight: 15,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff'
  }
})
