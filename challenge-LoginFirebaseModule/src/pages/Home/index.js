import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.btnArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.backButton}
        >
          <Feather
            name="arrow-left"
            size={30}
            color="#000"
            style={styles.btnIcon}
          />
          <Text style={styles.text}>VOLTAR</Text>
        </TouchableOpacity>
      </View>

      <Text>Teste</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828'
  },
  btnArea: {
    width: '100%',
    marginTop: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 60
  },
  text: {
    backgroundColor: '#fd1',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: 15,
    padding: 8
  },
  backButton: {
    marginLeft: 35,
    backgroundColor: '#fd1',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  btnIcon: {
    padding: 5
  }
})
