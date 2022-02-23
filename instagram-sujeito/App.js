import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Header } from './src/Header'
import { List } from './src/List'

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      name: 'Gwenneg Nyongesa',
      description: 'Mais um dia de muitos bugs :)',
      profilePicture:
        'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      pubPicture:
        'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      liked: true,
      likers: 1
    },
    {
      id: '2',
      name: 'Yasser Magda',
      description: 'Isso sim é ser raiz!!!!!',
      profilePicture:
        'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      pubPicture:
        'https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      liked: false,
      likers: 0
    },
    {
      id: '3',
      name: 'Katlego Ishita',
      description: 'Trabalho em equipe é tudo!! :D',
      profilePicture:
        'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      pubPicture:
        'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      liked: false,
      likers: 3
    },
    {
      id: '4',
      name: 'Gojko Hild',
      description: 'Isso sim que é TI!',
      profilePicture:
        'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      pubPicture:
        'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      liked: false,
      likers: 1
    },
    {
      id: '5',
      name: 'Dinesh Achelous',
      description: 'Study time!',
      profilePicture:
        'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      pubPicture:
        'https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      liked: true,
      likers: 32
    }
  ])

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({ item }) => <List data={item} />}
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
