import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import WelcomeHeader from './src/components/WelcomeHeader'
import Usuario from './src/components/Usuario'

export default function App() {
  const [users, setUsers] = useState([
    { id: '1', nome: 'Yuris', cargo: 'Dev', email: 'yuri@yuri.com' },
    { id: '2', nome: 'Eduarda', cargo: 'Psico', email: 'eduarda@eduarda.com' },
    { id: '3', nome: 'Clovis', cargo: 'Dev', email: 'clovis@clovis.com' },
    { id: '4', nome: 'Lucas', cargo: 'Manager', email: 'lucas@lucas.com' },
    { id: '5', nome: 'Kayo', cargo: 'Drummer', email: 'kayo@kayo.com' },
    { id: '6', nome: 'Gabriel', cargo: 'Psico', email: 'gabriel@gabriel.com' }
  ])

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <FlatList
        data={users}
        renderItem={({ item }) => <Usuario data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
