import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

function App() {
  const [img, setImg] = useState(require('./src/img/biscoito.png'))
  const [phrase, setPhrase] = useState('')

  let phrases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]

  function breakBiscoito() {
    let randomNumber = Math.floor(Math.random() * phrases.length)

    setPhrase(`" ${phrases[randomNumber]} "`)
    setImg(require('./src/img/biscoitoAberto.png'))
  }

  function resetBiscoito() {
    setPhrase('')
    setImg(require('./src/img/biscoito.png'))
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.textPhrase}>{phrase}</Text>
      <TouchableOpacity style={styles.button} onPress={breakBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 15, borderColor: '#121212' }]}
        onPress={resetBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212' }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textPhrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App
