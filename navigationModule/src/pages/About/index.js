import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { useRoute, useNavigation } from '@react-navigation/native'

export function About() {
  const route = useRoute()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name === '' ? 'Página About' : route.params?.name
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página About</Text>
      <TouchableOpacity
        style={styles.area}
        onPress={() =>
          navigation.navigate('Contact', {
            email: 'yuri@test.com',
            phoneNumber: '(xx) 99999-9999'
          })
        }
      >
        <Text style={styles.btnText}>Ir para tela Contact</Text>
        <Feather style={styles.btnIcon} name="user" size={30} color="#fff" />
      </TouchableOpacity>
      <Text>{route.params?.name}</Text>

      <TouchableOpacity style={styles.area} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Voltar Tela</Text>
        <Feather
          style={styles.btnIcon}
          name="arrow-left"
          size={30}
          color="#fff"
        />
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
