import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Pessoa from './src/components/Pessoa'

export default function App() {
  const [feed, setFeed] = useState([
    { id: '1', nome: 'Yuri', idade: '20', email: 'yuri@yuri.com' },
    { id: '2', nome: 'Lucas', idade: '50', email: 'lucas@lucas.com' },
    { id: '3', nome: 'Clovis', idade: '32', email: 'clovis@clovis.com' },
    { id: '4', nome: 'Gabriel', idade: '20', email: 'gabriel@gabriel.com' },
    { id: '5', nome: 'Eduarda', idade: '21', email: 'eduarda@eduarda.com' }
  ])

  {
    /* 
  Interessante sempre utilizar ID no flatlist 
  tem como setar a key utilizando keyExtractor e passar a propriedade ID
  */
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        // keyExtractor={item => item._id}
        data={feed}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
