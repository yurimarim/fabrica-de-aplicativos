import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()
  function navigateAbout() {
    navigation.navigate('About', {
      name: 'Teste Título (x)',
      email: 'yuri@test.com'
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.area} onPress={navigateAbout}>
        <Text style={styles.btnText}>Ir para tela About</Text>
        <Feather
          style={styles.btnIcon}
          name="book-open"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>

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
