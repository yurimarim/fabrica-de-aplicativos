import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { useNavigation, useRoute, StackActions } from '@react-navigation/native'

export function Contact() {
  const route = useRoute()
  const navigation = useNavigation()

  function handleHome() {
    navigation.dispatch(StackActions.popToTop())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Contact</Text>
      <Text>{route.params?.email}</Text>
      <Text>{route.params?.phoneNumber}</Text>

      <TouchableOpacity style={styles.area} onPress={handleHome}>
        <Text style={styles.btnText}>Voltar Home</Text>
        <Feather style={styles.btnIcon} name="home" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 25
  },
  area: {
    margin: 20,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: 5
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  btnIcon: {
    marginLeft: 10
  }
})
