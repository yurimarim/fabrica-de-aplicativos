import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Movies } from './src/components/Movies'
import { api } from './src/services/api'

export default function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getMovies() {
      const response = await api.get('r-api/?api=filmes')

      // console.log(response.data)
      setMovies(response.data)
      setLoading(false)
    }

    getMovies()
  }, [])

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#212121" />
        <FlatList
          keyExtractor={item => String(item.id)}
          data={movies}
          renderItem={({ item }) => <Movies data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  }
})
