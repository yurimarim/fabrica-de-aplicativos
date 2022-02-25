import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native'

import { DetailModal } from './Modal'

export function Movies({ data }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>

        <Image source={{ uri: data.foto }} style={styles.cardImage} />

        <View style={styles.btnArea}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.btnText}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={showModal}>
        <DetailModal movie={data} back={() => setShowModal(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 2,
    margin: 15
  },
  cardImage: {
    height: 250,
    zIndex: 0
  },
  title: {
    padding: 15,
    fontSize: 18
  },
  btnArea: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 1
  },
  btn: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  }
})
