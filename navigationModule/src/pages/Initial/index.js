import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Initial() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* <Input type="text" /> */}

      <Text style={styles.text}>Página Initial</Text>
      <TouchableOpacity
        style={styles.area}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnText}>Ir para tela Home</Text>
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
